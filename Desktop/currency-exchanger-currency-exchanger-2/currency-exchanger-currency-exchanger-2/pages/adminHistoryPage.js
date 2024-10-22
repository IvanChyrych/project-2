module.exports = function (app, pool, requireAdmin, baseHTML) {
    app.get('/admin/exchange-history', requireAdmin, async function (req, res) {
        try {
            const [history] = await pool.query(`
            SELECT  h.id,  user, h.date, h.inCurrencySum, h.amount, h.inCurrencyName, h.fromCurrencyName 
            FROM history h
            JOIN users ON user = users.id
        `);
            let historyTable = `
            <table>
                <tr>
                    <th>ID</th>           
                    <th>Продано</th>
                    <th>Куплено</th>
                    <th>Дата</th>
                    <th>Пользователь</th>
                 </tr>
        `;
            history.forEach(entry => {
                historyTable += `
                <tr>
                    <td>${entry.id}</td>
                    <td>${entry.amount} ${entry.fromCurrencyName}</td>
                    <td>${entry.inCurrencySum} ${entry.inCurrencyName}</td>
                    <td>${new Date(entry.date).toLocaleString()}</td>
                    <td>${entry.user} </td>
                </tr>
            `;
            });
            historyTable += '</table>';
            const content = `
            <h1>История операций</h1>
            ${historyTable}
            <br>
                 <button onclick="location.href='/admin/currency/'" class="history-button">Вернуться в Админ панель</button>
            `;
            res.send(baseHTML('История операций', content));
        } catch (error) {
            console.error('Error fetching exchange history:', error);
            res.status(500).send('Failed to load exchange history.');
        }
    });

}