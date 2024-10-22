const axios = require('axios');
const uri = 'https://api.nbrb.by/';
const ratesUrl = `${uri}ExRates/Rates?Periodicity=0`;

module.exports = function (app, requireLogin, pool, baseHTML) {

    // Функция для получения курсов валют с API
    async function fetchRates() {
        try {
            const response = await axios.get(ratesUrl);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении курсов валют из API:', error);
            return [];
        }
    }

    // Функция для сохранения действия в сессии
    function saveActionInSession(req, action) {
        if (!req.session.actions) {
            req.session.actions = [];
        }
        req.session.actions.push({
            action,
            timestamp: new Date()
        });
    }

    // Функция для получения максимальной доступной суммы для обмена
    async function getMaxAmount(pool) {
        try {
            const [rows] = await pool.query('SELECT max_amount FROM exchange_settings WHERE id = 1');
            if (rows.length > 0) {
                return parseFloat(rows[0].max_amount);
            } else {
                // Если запись отсутствует, создаём её с дефолтным значением
                await pool.query('INSERT INTO exchange_settings (max_amount) VALUES (?)', [10000]);
                return 10000;
            }
        } catch (error) {
            console.error('Ошибка при получении MAX_AMOUNT из базы данных:', error);
            throw error;
        }
    }

    app.post('/user/exchange', requireLogin, async function (req, res) {
        const { currencyIDFrom, currencyIDIn, amount } = req.body;
    
        try {
            // Получаем актуальные курсы валют с API
            const rates = await fetchRates();
    
            // Логика для валюты BYN, так как она не приходит в API
            const fromCurrencyData = currencyIDFrom === 'BYN' 
                ? { Cur_ID: 'BYN', Cur_Name: 'BYN', Cur_OfficialRate: 1, Cur_Scale: 1 }
                : rates.find(currency => currency.Cur_ID == currencyIDFrom);
    
            const inCurrencyData = currencyIDIn === 'BYN'
                ? { Cur_ID: 'BYN', Cur_Name: 'BYN', Cur_OfficialRate: 1, Cur_Scale: 1 }
                : rates.find(currency => currency.Cur_ID == currencyIDIn);
    
            if (!fromCurrencyData || !inCurrencyData) {
                return res.status(404).send('Одна из выбранных валют не найдена.');
            }
    
            const fromCurrencyRate = parseFloat(fromCurrencyData.Cur_OfficialRate / fromCurrencyData.Cur_Scale);
            const inCurrencyRate = parseFloat(inCurrencyData.Cur_OfficialRate / inCurrencyData.Cur_Scale);   
    
            const fromCurrencyName = fromCurrencyData.Cur_Name;
            const inCurrencyName = inCurrencyData.Cur_Name;
    
            // Проверка на положительность суммы
            if (parseFloat(amount) <= 0) {
                return res.status(400).send('Сумма обмена должна быть положительной.');
            }
    
            // Проверка, чтобы исходная и целевая валюта не совпадали
            if (fromCurrencyName === inCurrencyName) {
                return res.status(400).send('Исходная и целевая валюты не могут быть одинаковыми.');
            }
    
            // Проверка на кратность 5
            if (amount % 5 !== 0) {
                return res.status(400).send('Сумма для получения должна быть кратна 5.');
            }
    
            let amountInBYN = 0;
    
            // Рассчитываем, сколько нужно продать, чтобы получить указанную сумму
            if (inCurrencyName === 'BYN') {
                amountInBYN = parseFloat(amount);
            } else if (fromCurrencyName === 'BYN') {
                amountInBYN = amount * inCurrencyRate;
            } else {
                amountInBYN = amount * inCurrencyRate / fromCurrencyRate;
            }
    
            // Проверка максимальной доступной суммы
            const currentMax = await getMaxAmount(pool);
            if (amountInBYN > currentMax) {
                return res.status(400).send(`Обмен невозможен. Требуемая сумма в BYN (${amountInBYN.toFixed(2)}) превышает доступные средства (${currentMax.toFixed(2)} BYN).`);
            }
    
            let sumInTargetCurrency = amount; // Здесь сумма в целевой валюте уже известна (это amount)
    
            const currentDate = new Date();
    
            // Сохраняем транзакцию в базу данных
            await pool.query(
                'INSERT INTO history (amount, fromCurrencyName, inCurrencyName, date, inCurrencySum, user) VALUES (?, ?, ?, ?, ?, ?)', [
                amountInBYN, // Здесь меняем на amountInBYN
                fromCurrencyName,
                inCurrencyName,
                currentDate,
                sumInTargetCurrency,
                req.session.userId
            ]);
    
            // Сохраняем действие в сессии
            saveActionInSession(req, `
                Получено ${sumInTargetCurrency} ${inCurrencyName}
                <br>
                Продано ${amountInBYN} ${fromCurrencyName}
                <br>
                Дата: ${currentDate.toLocaleString()}
            `);
    
            // Формируем HTML ответ
            const content = `
                <br>
                Обмен произведен и сохранен в историю!
                <br>
                Получено ${sumInTargetCurrency} ${inCurrencyName}
                <br>
                Продано ${amountInBYN} ${fromCurrencyName}
                <br>
                <button onclick="location.href='/user/exchange'">Вернуться на страницу обмена валют</button>
            `;
            res.send(baseHTML('Обмен произведен и сохранен в историю!', content));
    
        } catch (error) {
            console.error('Ошибка при обработке обмена:', error);
            res.status(500).send('Не удалось обработать обмен.');
        }
    });
    
    

    // Маршрут для отображения интерфейса обмена валют
    app.get('/user/exchange', requireLogin, async function (req, res) {
        try {
            const apiRates = await fetchRates();
            const [currencies_in] = await pool.query('SELECT * FROM currency_in_byn');
            const [currencies_from] = await pool.query('SELECT * FROM currency_from_byn');
            const currentMax = await getMaxAmount(pool);

            let currencyTableIn = '';
            currencies_in.forEach(currency => {
                currencyTableIn += `
                <tr>
                    <td>${currency.currency_in}</td>
                    <td>${currency.rate}</td>
                </tr>`;
            });

            let currencyTableFrom = '';
            currencies_from.forEach(currency => {
                currencyTableFrom += `
                <tr>
                    <td>${currency.currency_from}</td>
                    <td>${currency.rate}</td>
                </tr>`;
            });

            // Формирование списка валют для выбора пользователем
            let currencyOptionsIn = '';
            let currencyOptionsFrom = '';

            // Добавляем валюту BYN отдельно
            currencyOptionsIn += `<option value="BYN">BYN</option>`;
            currencyOptionsFrom += `<option value="BYN">BYN</option>`;

            // Добавляем остальные валюты из API
            apiRates.forEach(currency => {
                const officialRateForOneItem = currency.Cur_OfficialRate / currency.Cur_Scale;
                currencyOptionsIn += `<option value="${currency.Cur_ID}">${currency.Cur_Abbreviation} (1 ${currency.Cur_Abbreviation} = ${officialRateForOneItem.toFixed(4)} BYN)</option>`;
                currencyOptionsFrom += `<option value="${currency.Cur_ID}">${currency.Cur_Abbreviation} (1 ${currency.Cur_Abbreviation} = ${officialRateForOneItem.toFixed(4)} BYN)</option>`;
            });

            const content = `
                <h2>Ограничение: ${currentMax.toFixed(2)} BYN</h2>
                <h1>Доступные валюты для обмена:</h1>
                <form action="/user/exchange" method="POST">
                <label for="fromCurrency">Продать:</label>
                <select name="currencyIDFrom" required>
                ${currencyOptionsFrom}
                </select>
                <label for="inCurrency">Купить:</label>
                <select name="currencyIDIn" required>
                    ${currencyOptionsIn}
                </select>
                <input type="number" name="amount" min="1" step="0.01" placeholder="Сумма для получения" required>
                <button type="submit">Обмен</button>
                </form>
            
                <br>
                <button onclick="location.href='/user/session-history'" class="history-button">История операций за сессию</button>
            `;
            res.send(baseHTML('Обмен валют', content));

        } catch (error) {
            console.error('Ошибка при получении валют:', error);
            res.status(500).send('Не удалось загрузить валюты.');
        }
    });
};

