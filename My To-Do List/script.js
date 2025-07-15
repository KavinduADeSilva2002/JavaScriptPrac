document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.onclick = () => {
    li.classList.toggle("completed");
    saveTasks();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";

  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");
    deleteBtn.className = "delete-btn";

    const deleteBtn = document.createElement("delete-btn");
    
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => {
      li.remove();
      saveTasks();
    };

    li.onclick = () => {
      li.classList.toggle("completed");
      saveTasks();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
  });
}
