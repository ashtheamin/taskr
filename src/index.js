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

for (task of taskList) {
    const taskTable = document.getElementById("taskTable");
    const taskItem = document.createElement("p")
    taskItem.textContent = task;
    taskTable.appendChild(taskItem);
}
console.log(taskList);