function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value;
    if (taskText === "") return;

    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");

    const taskTextNode = document.createTextNode(taskText);
    taskItem.appendChild(taskTextNode);

    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskItem.remove();
    taskItem.appendChild(deleteButton);

    // Mark task as complete
    taskItem.onclick = () => taskItem.classList.toggle("completed");

    taskList.appendChild(taskItem);
    taskInput.value = "";
}
