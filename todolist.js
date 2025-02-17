let myTodoList = document.getElementsByTagName('li');
for(let list of myTodoList) {
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("\u00D7");
    span.className = ('todo-list');
    span.appendChild(txt);
    list.appendChild(span);

}

let close = document.getElementsByClassName('ctn');
for (let i of close) {
    i.onclick = function(){
        let div = document.getElementById('taskList');
        div.style.display = 'none';
    }
}

function addTask () {
    let li = document.createElement('li');
    let input
}

// let list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'li') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);


// function addTask () {
//     let inputDisplay = document.querySelector('#inputDisplay');
//     let todoList = inputDisplay.value.trim();
//     if (todoList === "") return;

//     let li = document.createElement('li');
//     li.innerHTML =`
//     <input type="checkbox" onchange="toggleTask(this)">
//     <span>${todoList}</span>
//     <button class="edit-btn" onclick="editTask(this)">Edit</button>
//     <button class="delete-btn" onclick="removeTask(this)">Delete</button>
//     `;

//     document.getElementById("taskList").appendChild(li);
//     taskInput.value = "";
// }

// function removeTask(button) {
//     button.parentElement.remove();
// }

