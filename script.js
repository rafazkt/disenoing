document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    const closeModal = document.querySelector(".close");
    const saveTaskBtn = document.getElementById("saveTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Función para abrir el modal
    function openModal() {
        taskModal.style.display = "flex";
        taskModal.style.visibility = "visible";
        taskModal.style.opacity = "1";
        taskInput.focus();
    }

    // Función para cerrar el modal
    function closeModalFunc() {
        taskModal.style.visibility = "hidden";
        taskModal.style.opacity = "0";
        setTimeout(() => {
            taskModal.style.display = "none"; // Ocultar completamente después de la animación
        }, 200);
    }

    // Mostrar el modal al hacer clic en el botón
    addTaskBtn.addEventListener("click", openModal);

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener("click", closeModalFunc);

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener("click", (e) => {
        if (e.target === taskModal) {
            closeModalFunc();
        }
    });

    // Cerrar modal con la tecla "Esc"
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModalFunc();
        }
    });

    // Función para añadir una tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Verificar si la tarea ya existe
        const existingTasks = Array.from(taskList.children).map(li => li.textContent.replace("X", "").trim());
        if (existingTasks.includes(taskText)) {
            alert("Esta tarea ya existe.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">X</button>`;

        // Eliminar tarea al hacer clic en "X"
        li.querySelector(".delete").addEventListener("click", () => li.remove());

        taskList.appendChild(li);
        taskInput.value = "";
        closeModalFunc();
        addTaskBtn.focus(); // Mejor UX
    }

    saveTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
});
