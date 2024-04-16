const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//fonction d'ajout d'une tache
function addTask() {
  if (inputBox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// event suppression tache
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// store the data when refreshing
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//get the list of the tasks in the localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
