let tasksText = document.getElementById('today-task')
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let doneBtn = document.getElementById('doneBtn');
let delBtn = document.getElementById('delBtn');
let divTask = document.getElementById('divTask')

let taskArr = [];

let allTasks = () => addBtn.addEventListener('click', addTask);

function addTask(e){
    let allTaskText = (tasksText).value;

    taskArr.push(allTaskText);
    
    (tasksText).value = '';

    console.log(taskArr)

    divTask.style.display = 'visible';

    console.log(divTask)

}

allTasks()
