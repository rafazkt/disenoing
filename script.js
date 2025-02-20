document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    const closeModal = document.querySelector(".close");
    const saveTaskBtn = document.getElementById("saveTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        taskModal.style.display = "flex";
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

    saveTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <button class="delete">X</button>`;
            li.querySelector(".delete").addEventListener("click", () => {
                li.remove();
            });
            taskList.appendChild(li);
            taskInput.value = "";
            taskModal.style.display = "none";
        }
    });

    // Accesibilidad: Tecla "Enter" para agregar tareas
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            saveTaskBtn.click();
        }
