// Dom selectors 
const inputVAlue = document.getElementById('inputDisplay');
const addNewTask = document.querySelector('.btn');
const clearAllButton = document.querySelector('.ctn');
const filterSelect = document.querySelector('#filter-todos');
const myTodoList = document.querySelector('#taskList');

// variable to hold the current task text
let task;

// variable to hold the structure of the new task as an object
let todoObject;

// load existing todos from localStorage, if available, or initialize an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];
console.log('todos: ', todos);
updateScreen(); // display the tasks on the screen 

// function to create a new task from the user's input 
function createTodo (e) {
    task = inputVAlue.value.trim(); // get the value of the task input, trimmed of whitespace
    console.log(task)
    
    if (task === "") {
        // exit early if the task input is empty
        alert('Please enter a valid task!');
        return;
    }

    // create a new task object with the task text and mark it as not completed
    todoObject = {
    task: task,
    completed: false
    };

    // check if the "Enetr" key (key code 13) was pressed to add the task 
    if (e.keyCode=== 13) {
        addToTodosArray(); 
    }
    updateScreen()
}

// add an event listener to the input field to listen for "Enter" key presses
inputVAlue.addEventListener('keyup', e=>createTodo (e) );


// function to add the new task to the object to the todos array
function addToTodosArray () {
    todos.push(todoObject);
    localStorage.setItem('todos', JSON.stringify(todos));
    updateScreen();

}


 // function to add the new task to the todo array
 function addTodoToArray () {
    if (todoObject.task){
        todos.push(todoObject)
        localStorage.setItem('todos', JSON.stringify(todos));
    }else {
        alert('No empty array')
    }
    addToTodosArray()
    updateScreen()
}

// add an event listener to the "add" button to add a new task when clicked 
addNewTask.addEventListener('click', function (){
    if (inputVAlue.value.trim() === "") {
        alert('Please enter a valid task!');
    } else {
        addToTodosArray();
    }
});



// function to filter todos based on the selected option (all, pending completd)

let filter;
let filteredTodos;
let todo;

function applyFilter (){
    filter = filterSelect.value; //get the selected filter value
    console.log({filter})
    filteredTodos = []; // initialize an empty array to hold filter todos
    
    // use a for loop to iterate over the todso array
    for (let i = 0; i< todos.length; i++) {
        todo = todos[i]; // access the current todo

        //check the filter value and push the appropriate todos into the filteredTodos array
        if (filter === 'pending' && !todo.Completed) {
            filteredTodos.push(todo); //add to the filteredTodos if its pending
        }else if (filter === 'completed' && !todo.Completed) {filteredTodos.push(todo); //add to filteredTodos if its completed 

        }
    }

    console.log({filteredTodos})
    // update the screen with the filtered todos or all todos if no filter is applied 
    if (filter === 'all') {
        updateScreen(todos);// show all tasks
    } else {
        updateScreen(filteredTodos); //pass filtered todos to update the screen 
    }
}

filterSelect.addEventListener('change', function (e){
    applyFilter();
    updateScreen()
    addToTodosArray()
})

// function to delete a specific task from the todos array
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    applyFilter();
    updateScreen()
}

// function to clear all tasks
// function clearAllTodos(){
//     todos = []
//     localStorage.setItem('todos', JSON.stringify(todos));
//     clearAllTodos = clearAllButton
//     clearAllButton.offsetHeight >= 300?
//     clearAllButton.classList.add('overflow') : clearAllButton.classList.remove('overflow');
//     updateScreen()
// }

clearAllButton.addEventListener('click', function(){
    todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
    
    updateScreen(); 
});

// add a function to toggle the completion state of a task
function toggleTaskCompletion(index) {
    todos[index].completed = !todos[index].completed
    localStorage.setItem('todos', JSON.stringify(todos));
    updateScreen();
    applyFilter()
}


// function to edit an existing task 
function editTodo(index) {
    //const taskToEdit = prompt(`Edit your task`, todos[index].task);
    todos[index].task = prompt(`Edit your task`, todos[index].task);
    localStorage.setItem('todos', JSON.stringify(todos));
    applyFilter();
    updateScreen()
}

//function to update the UI by giving the current list of todos
function updateScreen() {
    // clear the myTodoList to remove any existing tasks in the UI before rendering the new list
    myTodoList.innerHTML = '';
}
// reset the input field value to an empty string after adding/updating tasks
if(todos.length < 1) {
    myTodoList.innerHTML = '<h3>No tasks found</h3>';
    // exit the function early if no tasks are available 
}  

// loop through the todos array to dynamically create and display each task using template
for (let index = 0; index < todos.length; index++) {
    //add a new list item for each todo task and append it directly to the myTodoList's HTML
    myTodoList.innerHTML += `
    <li class="task">
                <div class="content">
                    <!-- Checkbox for marking the task as completed, binding the checked state to the task's isCompleted property -->
                    <input type="checkbox" onchange='toggleTaskCompletion(${index})' id="check-btn-${index}"${todos[index].completed ? 'checked' : ''}>

                    <!-- Display the task with edit and delete buttons -->
                    <div class="spans">

                    <!-- Label shows the text of the task -->
                    <label class="text" for="check-btn-${index}">${todos[index].task}</label>

                    <!-- Container for edit and delete buttons -->
                    <span class="settings">

                    <!-- Edit button to allow the user to edit the task -->
                        <button onclick="editTodo(${index})"><i class="bi bi-pen-fill"></i>Edit</button>

                    <!-- Delete button to allow the user to delete the task -->
                        <button onclick="deleteTodo(${index})"><i class="bi bi-trash"></i>Delete</button>
                        </span>
                    </div>
                </div>
            </li>`
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