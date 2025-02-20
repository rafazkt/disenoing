// script.js
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task-button');

addTaskButton.addEventListener('click', () => {
  // Aquí se abriría la pantalla de edición
  alert('Abrir pantalla de edición');
});

// Ejemplo de cómo añadir una tarea a la lista
function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    <span>${task.title}</span>
    <button>Editar</button>
    <button>Eliminar</button>
  `;
  taskList.appendChild(li);
}

// Ejemplo de datos de tareas (simulado)
const tasks = [
  { title: 'Hacer la compra', completed: false },
  { title: 'Llamar al médico', completed: true },
];

tasks.forEach(task => addTask(task));
