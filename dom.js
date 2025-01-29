//EXAMINE THE DOCUMENT OBJECT 

//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 'item lister'
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms[0]);
//console.log(document.links);

// GETELEMENTBYID
//var headerTitle = document.getElementById('header-title')
//var header = document.getElementById('main-header')
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Hello';
//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

// GETELEMENTBYCLASSNAME 
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].innerText = 'Hello Vee';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items[2].textContent = ('V & C');
//items[2].style.backgroundColor = 'orange';
//items[3].style.backgroundColor = 'red';


//items.style.backgroundColor = '#f4f4f4';

//for (i=0; i<items.length; i++){
//    items[i].style.backgroundColor = '#f8f6f5';
//}

// GETELEMENTBYTAGNAME 

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].innerText = 'Hello Vee';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';

//li.style.backgroundColor = '#f4f4f4';

//for (i=0; i<li.length; i++){
//    li[i].style.backgroundColor = '#f8f6f5';
//}

// QUERYSELECTOR 

//var input = document.querySelector('input');
//input.value= 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value = 'SEND';

//submit.style.backgroundColor = 'pink';
//submit.style.color = 'black';

/*var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
lastItem.innerText = 'Totoya Corolla';
lastItem.style.fontWeight = 'bolder';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'red';

// QUERYSELECTOR ALL

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Items';
titles[1].innerText = 'Add Items';

var odd= document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for (var i=0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}*/

//TRAVERSING THE DOM
//var itemList = document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);

// childrenNodes
//console.log(itemList.children)

let box = document.getElementById('box');
box.style.backgroundColor = "blue";
