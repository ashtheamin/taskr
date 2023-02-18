function getNewTaskId() {
    if (localStorage.getItem("taskID") === null) {
        localStorage.setItem("taskID", JSON.stringify(-1));
    }
    const oldID = JSON.parse(localStorage.getItem("taskID"));
    const newID = oldID + 1;
    localStorage.setItem("taskID", JSON.stringify(newID));
    return newID;
}

function addTask() {
    let taskArray = JSON.parse(localStorage.getItem('taskArray'));
    const newTaskLabel = document.getElementById('taskInputForm')['addTask'].value
    const newTask = {"id": getNewTaskId(), "label": newTaskLabel};  
    taskArray.push(newTask);
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
}
document.getElementById('taskInputForm').addEventListener("submit", function(event) {
    addTask();
});

function removeTask(taskList, taskDiv) {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));

    let counter = 0;
    for (task of taskArray) {
        if (task.id.toString() === taskDiv.getAttribute("id").toString()) {
            taskArray.splice(counter, 1);
            localStorage.setItem("taskArray", JSON.stringify([]));
            localStorage.setItem("taskArray", JSON.stringify(taskArray));
            break;
        }
        counter = counter + 1;
    }
    taskList.removeChild(taskDiv);
    return;
}

function renderTaskList() {
    let taskArray = JSON.parse(localStorage.getItem('taskArray'));
    if (localStorage.getItem('taskArray') === null) {
        localStorage.setItem('taskArray', JSON.stringify(new Array));
        taskArray = JSON.parse(localStorage.getItem('taskArray'));
    }
    
    for (task of taskArray) {
        const taskList = document.getElementById("taskList");
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("id", task.id);
        taskDiv.setAttribute("class", "taskDiv")

        const taskDivLabel = document.createElement("li");
        taskDivLabel.textContent = "ID: " + task.id + " " + task.label;
        taskDivLabel.setAttribute("class", "taskDivElement");
        taskDiv.appendChild(taskDivLabel);
    
        const taskDivCheckbox = document.createElement("input");
        taskDivCheckbox.setAttribute("type", "checkbox");
        taskDivCheckbox.setAttribute("class", "taskDivElement");
        taskDiv.appendChild(taskDivCheckbox);

        const taskDivRemoveButton = document.createElement("input");
        taskDivRemoveButton.setAttribute("type", "checkbox")
        taskDivRemoveButton.setAttribute("class", "taskDivElement");
        
        taskDiv.appendChild(taskDivRemoveButton);
        taskList.appendChild(taskDiv);

        taskDivRemoveButton.addEventListener("change", function(taskDivRemoveButton) {
            removeTask(taskList, taskDiv);
            return;
        })
    }
}
renderTaskList()