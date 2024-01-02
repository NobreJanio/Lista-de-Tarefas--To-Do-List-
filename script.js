// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
  }
}

// Função para renderizar as tarefas na tela
function renderTasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTask(${index})">Remover</button>
    `;
    tasksContainer.appendChild(taskElement);
  });
}

// Função para remover uma tarefa
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Renderiza as tarefas iniciais
renderTasks();
