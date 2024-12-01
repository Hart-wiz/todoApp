const form = document.querySelector("form");
const textarea = document.querySelector(".textarea");
const main = document.querySelector("main");

function createCard() {
  const text = textarea.value;
  const cardBody = document.createElement("div");

  main.appendChild(cardBody);
  card.classList.add("card");

  card.innerText = text;
  form.classList.add("not-visible");
}

function addTodo() {
  form.classList.add("visible");
  form.classList.remove("not-visible");
  textarea.value = "";
}
