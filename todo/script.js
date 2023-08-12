function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="checkbox-container">
      <input type="checkbox" onclick="toggleCompleted(this)">
      <span class="checkbox-label">${taskInput.value}</span>
    </div>
    <span class="delete" onclick="removeTask(this)">&#10005;</span>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function removeTask(element) {
  const li = element.parentElement;
  li.parentNode.removeChild(li);
}

function toggleCompleted(checkbox) {
  const li = checkbox.parentElement.parentElement;
  li.classList.toggle("completed");
}

function showAll() {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => task.style.display = "flex");
}

function showPending() {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => {
    if (task.classList.contains("completed")) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
}

function showCompleted() {
  const tasks = document.querySelectorAll("li");
  tasks.forEach(task => {
    if (task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
