const listContainer = document.querySelector(".list-container");
const inputBox = document.querySelector(".input-box");

function addTask() {
  if (inputBox.value === "") {
    alert("type in a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove("LI");
    }
    saveData();
  },
  false
);

// function to save data in browser

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// to show the list saved when browser is refreshed
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
