document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    const closeModal = document.querySelector(".close");
    const saveTaskBtn = document.getElementById("saveTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Asegurar que el modal aparece correctamente
    addTaskBtn.addEventListener("click", () => {
        taskModal.style.display = "flex";
        taskInput.value = ""; // Limpiar input
        taskInput.focus();
    });

    closeModal.addEventListener("click", () => {
        taskModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === taskModal) {
            taskModal.style.display = "none";
        }
    });

    saveTaskBtn.addEventListener("click", addTask);

    // Permitir añadir con Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <button class="delete">X</button>`;
            
            // Eliminar tarea
            li.querySelector(".delete").addEventListener("click", () => {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = "";
            taskModal.style.display = "none";
        }
    }

    // Cerrar modal con Esc
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            taskModal.style.display = "none";
        }
    });
});

