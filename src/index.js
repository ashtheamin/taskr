function addTask() {
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    const newTask = document.getElementById('taskInputForm')['addTask'].value
    taskList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(taskList));
}
document.getElementById('taskInputForm').addEventListener("submit", function(event) {
    addTask();
});

let taskList = JSON.parse(localStorage.getItem('taskList'));
if (localStorage.getItem('taskList') === null) {
    localStorage.setItem('taskList', JSON.stringify(new Array));
    taskList = JSON.parse(localStorage.getItem('taskList'));
}

counter = 0;
for (taskLabel of taskList) {
    id = counter;

    const taskTable = document.getElementById("taskTable");

    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", taskLabel+counter);
    

    const taskDivCheckbox = document.createElement("input");
    taskDivCheckbox.setAttribute("type", "checkbox");
    taskDivCheckbox.setAttribute("class", "taskDivElement");
    taskDiv.appendChild(taskDivCheckbox);

    const taskDivLabel = document.createElement("p");
    taskDivLabel.textContent = "ID: " + counter + " " + taskLabel;
    taskDivLabel.setAttribute("class", "taskDivElement");
    taskDiv.appendChild(taskDivLabel);

    const taskDivRemoveButton = document.createElement("button");
    taskDivRemoveButton.setAttribute("class", "taskDivElement");
    taskDiv.appendChild(taskDivRemoveButton);

    
    console.log("task"+counter.toString());

    taskTable.appendChild(taskDiv);
    counter = counter + 1;
}
console.log(taskList);