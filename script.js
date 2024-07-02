document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".add button");
    const inputField = document.querySelector(".input");
    const taskContainer = document.querySelector(".list");

    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            const task = document.createElement("div");
            task.className = "task";

            const taskContent = document.createElement("p");
            taskContent.className = "text";
            taskContent.textContent = taskText;
            
            taskContent.addEventListener("click", function() {
                taskContent.classList.toggle("completed");
            });
            task.appendChild(taskContent);

            const deleteButton = document.createElement("button");
            deleteButton.className = "apagar";
            deleteButton.textContent = 'Apagar';
            deleteButton.addEventListener("click", function() {
                taskContainer.removeChild(task);
            });
            task.appendChild(deleteButton);

            taskContainer.appendChild(task);
            inputField.value = "";
        }
    }

    addButton.addEventListener("click", addTask);

    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
