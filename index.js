const form = document.querySelector("form");
const textarea = document.querySelector(".textarea");
const timearea = document.querySelector(".time");
const main = document.querySelector("main");

function createCard() {
  const text = textarea.value;
  const time = timearea.value;
  const cardBody = document.createElement("div");

  main.appendChild(cardBody);
  cardBody.classList.add("card");

  const todoText = document.createElement("article");
  cardBody.appendChild(todoText);
  todoText.classList.add("textClass");

  const todoTime = document.createElement("p");
  cardBody.appendChild(todoTime);

  todoText.innerHTML = text;
  todoTime.innerText = time;
  form.classList.add("not-visible");

  // creating the delete btn

  function handleClick() {
    alert("clicked button");
  }
  const createDelBtn = document.createElement("button");
  createDelBtn.innerHTML = "delete";
  cardBody.appendChild(createDelBtn);
  createDelBtn.classList.add("del-btn");
  createDelBtn.setAttribute("onclick", handleClick());
  // cardBody.classList.remove("card");
  // cardBody.classList.add("not-visible");

  // creating the completed task btn
  const completedTaskBtn = document.createElement("button");
}

function addTodo() {
  form.classList.add("visible");
  form.classList.remove("not-visible");
  textarea.value = "";
}
