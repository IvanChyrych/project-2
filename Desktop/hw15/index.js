fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    renderTemplate(data)
    console.log(data);
  })
  .catch(() => {
    console.log("Что-то пошло не так");
  });

function buildTemplate({ id, title }) {
  return `
          <ul class="card">
          <li class="card-title">${id}  ${title}</li>
          </ul>   
    `;
}

function renderTemplate(data) {
  let html = "";

  data.forEach((todo) => {
    const template = buildTemplate(todo);
    html += template;
  });

  document.body.insertAdjacentHTML("beforeend", html);
}
