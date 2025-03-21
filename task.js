const taskInput = document.getElementById('taskInput') ;
const addTaskButton = document.getElementById('newTask'); 
const taskList = document.getElementById('tasklist');
const clearTaskButton = document.getElementById('removeTask');
// const listItem = document.createElement('li');
const progressBar =document.getElementById('progess');
const numbers = document.getElementById('numbers');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let text;

const addTask = ()=>{
    text = taskInput.value.trim();

    if (text){
        tasks.push({text: text, completed: false})
        taskInput.value = ""
        updateTasklist()
        updateStats()
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
}

const updateTasklist = ()=>{
    taskList.innerHTML = '';

    taskInput.value = '';

    for (let index = 0; index < tasks.length; index++) {
        listItem = document.createElement('li');


        
        listItem.innerHTML += `
        <div class="taskItem">
            <div class="task ${tasks[index].completed ? 'completed' : ''}">
                <input type="checkbox" id="tickbox" ${tasks[index].completed ? "checked" : ""}>
                <p>${tasks[index].text}</p>
            </div>    
            <div class="icons">
                <button id="e" onClick="editTask(${index})"><i class="bi bi-pen-fill"></i></button>
                <button class="d"><i class="bi bi-trash" onClick="deleteTask(${index})"></i></button>
            </div>
        </div>
        `;
        listItem.addEventListener('change', () => toggleTaskComplete(index));
        taskList.append(listItem);
       
    }
}

addTaskButton.addEventListener('click', function(e){
e.preventDefault()

    addTask()
})

clearTaskButton.addEventListener('click', ()=> tasks=[], localStorage.setItem('tasks', JSON.stringify(tasks)))

function toggleTaskComplete (index){
    tasks[index].completed = !tasks[index].completed;
    updateTasklist()
    updateStats()
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTask(index){
    tasks.splice(index,1);
    updateTasklist()
    updateStats()
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function editTask(index){
    tasks[index].text = prompt('Edit your text here', tasks[index].text);

    // text = tasks[index].text

    // tasks.splice(index,1)
    updateTasklist()
    updateStats()
    localStorage.setItem('tasks', JSON.stringify(tasks))
}



let completeTasks;
let totalTasks;
let progress;

function updateStats(){
    completeTasks = tasks.filter(task =>task.completed).length
    totalTasks = tasks.length
    progress = (completeTasks/totalTasks) *100;
    const progressBar =document.getElementById('progess');
    
    progressBar.style.width = `${progress}%`;

    numbers.innerText = `${completeTasks} / ${totalTasks}`;

    if (tasks.length && completeTasks === totalTasks){
        blaskConfetti()
    }
}

const blaskConfetti =()=> {
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}












































// let text;

// let taskObject; 

// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// console.log('tasks: ', tasks)


// function createTask(e){
//     text = taskInput.value.trim();

//     if(text === ''){
//         alert('provide task please')
//         return
//     }

//     taskObject = {
//         text : text,
//         completed: false
    
//     } 

//     if(e.keyCode === 13){
//         addTaskArray();
//     }
    
// };

// function addTaskArray(){
//     tasks.push(taskObject)
//     localStorage.setItem('tasks', JSON.stringify(tasks))
//     upDateScreen()
// }

// function addTaskArray(){
//     if(taskObject.text){
//         tasks.push(taskObject)
//         localStorage.setItem('tasks', JSON.stringify(tasks))
//         upDateScreen()
//     } else {
//         alert('No empty')
//     }
// }

// taskInput.addEventListener('keyup', function(e){
//  e.preventDefault()
//  createTask(e);
// })

// addTaskButton.addEventListener('click', function (e){
//     e.preventDefault();
//     if(text === ''){
//         alert('Please enter a valid task!');
//     } else {
//         addTaskArray();
//     }
// });

// console.log(tasks);

// function clearTask(){
//     tasks= [];
//     upDateScreen();
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// };

// function deleteButton(index){
//     tasks.splice(index, 1)
//     upDateScreen();
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function editButton(index){
//     tasks[index].text = prompt('edit your text here', tasks[index].text);
//     upDateScreen();
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// clearTaskButton.addEventListener('click', function(){
//    clearTask()
// })

// function toggleTaskCompletion(index){
//     tasks[index].completed = !tasks[index].completed;
//     upDateScreen();
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }


// function upDateScreen (tasksToDisplay = tasks){
//     taskList.innHTML = "";

//      taskInput.value = '';

//      if (tasksToDisplay.length < 1){
//          taskList.innHTML = '<h3>No tasks found</h3>';
//      }

//     for (let index = 0; index < tasksToDisplay.length; index++){

//         taskList.innHTML +=`
//         <ul class="task-list">
//         <li class="taskItem">
//                 <div class="task">
//                     <input type="checkbox" class="tickbox" onchange="toggleTaskCompletion(${index})" id="check-btn-${index}" ${tasksToDisplay[index].complete ? 'checked' : ''}>
//                     <div class="spans">
//                         <label class="words" for="check-btn-${index}">${tasksToDisplay.text}</label>
//                         <span class="settings">
//                             <button class="e" onclick="editButton(${index})"><i class="bi bi-pen-fill"></i></button>
//                             <button class="d" onclick="deleteButton(${index})"><i class="bi bi-trash"></i></button>
//                         </span>
//                     </div>
//                 </div>
//              </li> 
//              </ul>`;
//     }
// } 