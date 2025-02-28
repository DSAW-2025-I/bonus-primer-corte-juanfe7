function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
        li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}