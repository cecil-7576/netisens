// Dom selectors 
const inputValue = document.getElementById('inputDisplay');
const addNewTask = document.querySelector('.btn');
const clearAllButton = document.querySelector('#calltoaction');
const filterSelect = document.querySelector('#filter-todos');
const myTodoList = document.querySelector('#taskList');
const progressBar = document.getElementById('progress');

// variable to hold the current task text
let task;

// load existing todos from localStorage, if available, or initialize an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];
console.log('todos: ', todos);
// updateScreen();

// variable to hold the structure of the new task as an object
let todoObject;

//function to create a new task from the user's input 
function createTodo(e){
    task = inputValue.value.trim();

    if(task === ""){
        // exit early if the task input is empty
        alert('Please enter a valid task!');
        return;
    }

    //create a new task object with the task text and mark it as not completed
    todoObject = {
        task: task,
        completed: false
    };

    //check if the "Enter" key (key code 13) was pressed to add the task
    if (e.keyCode === 13){
        addTodosArray(); //add the task to the todo array
    }
};

//function to add the new task to the todos array
function addTodosArray(){
    todos.push(todoObject);
    if(todoObject.task){
        todos.push(todoObject)
        localStorage.setItem('todos', JSON.stringify(todos));
        updateScreen();
        updateStats();
    }else {
        alert('No empty task!')
    }
}

// add an event listeenr to the input field to listen for "Enter" key presses
inputValue.addEventListener('keyup', function (e){
    createTodo(e);
});

// add an event listener to the "Add" button ti add a new task when clicked 
addNewTask.addEventListener('click', function(){
    if(task === ''){
        alert('Please enter a valid task!')
    }else {
        addTodosArray()
        updateStats()
    }
});

//function to add the new task to the todos array
function addTodosArray(){
    todos.push(todoObject);
    localStorage.setItem('todos', JSON.stringify(todos));
    updateScreen();
    updateStats();
}

console.log(todos);


//function to filter todos based on the selected options (all, pending, completed)

let filter;

let filteredTodos;

let todo

function setFilter(){
    filter = filterSelect.value 
    console.log({filter});

    filteredTodos = [];

    todos.forEach(function(text){
        todo = text;

        if (filter === 'pending' && !todo.completed){
            filteredTodos.push(todo);
        } else if (filter === 'completed' && !todo.completed){
            filteredTodos.push(todo);
        }
        updateScreen
        updateStats()
    });

    console.log({filteredTodos});

    if (filter === 'all'){
        updateScreen(todos); 
        updateStats()// show all task
    } else {
        updateScreen(filteredTodos); 
        updateStats()// pass filter todos to update the screen
    }
}


function clearAll(){
    todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
    updateScreen();
}

clearAllButton.addEventListener('click', clearAll())

function toggleTaskCompletion(index){
    todos[index].complete = !todos[index].complete;
    localStorage.setItem('todos', JSON.stringify(todos));
    updateScreen();
    updateStats();
}

filterSelect.addEventListener('change', setFilter);

function editTodos(index){
    todos[index].task = prompt('Edit your task here!', todos[index].task);
    localStorage.setItem('todos', JSON.stringify(todos));
    setFilter();
    updateStats();
}

function deleteTodos(index){
   todos.splice(index, 1);
   localStorage.setItem('todos', JSON.stringify(todos));
   setFilter();
   updateStats();
}

function updateScreen(){
    myTodoList.innerHTML = "";

    inputValue.value = '';

    if (todos.length < 1 ){
        myTodoList.innerHTML = '<h3>No tasks found</h3>'
        return;
    }

    for (let index = 0; index < todos.length; index++){

        myTodoList.innerHTML +=`
        <li class="task">
            <div class="content">
                <!-- Checkbox for marking the task as completed, binding the checked state to the task's isCompleted property -->
                <input type="checkbox" onchange="toggleTaskCompletion(${index})" id="check-btn-${index}" ${todos[index].complete? 'checked' : ''}>
                
                <!-- Display the task with edit and delete buttons -->
                <div class="spans">
                    <!-- Label shows the text of the task -->
                    <label class="text" for="check-btn-${index}">${todos[index].task}</label>
                    
                    <!-- Container for edit and delete buttons -->
                    <span class="settings">
                        <!-- Edit button to allow the user to edit the task -->
                        <button onclick="editTodos(${index})">
                            <i class="fa fa-pencil" aria-hidden="true"></i>Edit
                        </button>

                        <!-- Delete button to allow the user to delete the task -->
                        <button onclick="deleteTodos(${index})">
                            <i class="fa fa-trash"></i>Delete
                        </button>
                    </span>
                </div>
            </div>                
        </li>`;
    }
}

let completeTasks;
let totalTasks;
let progress;

function updateStats(){
    completeTasks = todos.filter(task =>task.complete).length
    totalTasks = todos.length
    progress = (completeTasks/totalTasks) *100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`;

    // numbers.innerText = `${completeTasks} / ${totalTasks}`;

    // if (tasks.length && completeTasks === totalTasks){
    //     blaskConfetti()
    // }
}








// let myTodoList = document.getElementsByTagName('li'); 
// for(let list of myTodoList) {
//     let span = document.createElement('SPAN');
//     let txt = document.createTextNode("\u00D7");
//     span.className = ('todo-list');
//     span.appendChild(txt);
//     list.appendChild(span);

// }

// let close = document.getElementsByClassName('ctn');
// for (let i of close) {
//     i.onclick = function(){
//         let div = document.getElementById('taskList');
//         div.style.display = 'none';
//     }
// }

// function addTask () {
//     let li = document.createElement('li');
//     let inputVAlue = document.getElementById('inputDisplay').value;
//     let t = document.createTextNode(inputVAlue);
//     li.appendChild(t);
//     if (inputVAlue === '') {
//         alert('Please enter a valid task!');
//     } else {
//         document.getElementById('taskList').appendChild(li);
//     }
//     document.getElementById('inputDisplay').value = "";

//     let span = document.createElement('SPAN');
//     let txt = document.createTextNode("\u00D7");
//     span.className = ('todo-list');
//     span.appendChild(txt);
//     list.appendChild(span);

//     for (let i of close) {
//         i.onclick = function(){
//             let div = document.getElementById('taskList');
//             div.style.display = 'none';
//         }
// }
// }