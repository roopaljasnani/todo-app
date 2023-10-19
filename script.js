function addTask() {
    const taskText = document.getElementById("task").value;
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);

    document.getElementById("task").value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
