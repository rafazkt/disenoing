document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, ingresa una tarea.');
    return;
  }

  // Crear una nueva tarea
  const li = document.createElement('li');
  li.textContent = taskText;

  // Crear botón de eliminar
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  // Añadir el botón de eliminar a la tarea
  li.appendChild(deleteButton);

  // Añadir la tarea al listado
  document.getElementById('taskList').appendChild(li);

  // Limpiar el campo de entrada
  taskInput.value = '';
});
