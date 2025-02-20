document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    const closeModal = document.querySelector(".close");
    const saveTaskBtn = document.getElementById("saveTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Mostrar modal
    addTaskBtn.addEventListener("click", () => {
        taskModal.style.visibility = "visible";
        taskModal.style.opacity = "1";
        taskInput.focus();
    });

    // Cerrar modal
    function closeModalFunc() {
        taskModal.style.visibility = "hidden";
        taskModal.style.opacity = "0";
    }

    closeModal.addEventListener("click", closeModalFunc);

    window.addEventListener("click", (e) => {
        if (e.target === taskModal) {
            closeModalFunc();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModalFunc();
        }
    });

    // Agregar tarea
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

        // Eliminar tarea
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
