let box = document.getElementById('box');
box.style.background = 'blue';
let para = document.getElementById('p')
let button = document.getElementById('darkMode');
//button.body.style.backgroundColor = 'white';
button.addEventListener('click', function(e){
    //e.preventDefault
    //console.log('click')
    document.body.style.backgroundColor = 'navy';
    document.body.style.color = 'red';
    para.textContent = 'javaScript no be bean';

});


function myAnswer(){
    let x = document.getElementById('numb').value;
    let text; 
    if (isNaN(x) || x < 10 || x > 20){
         text = 'Input not valid';
     }else {
        text= 'Input Ok'
     }
     document.getElementById("demo").innerHTML= text;
}
let count = 0;
let incrementButton = document.getElementById('icr');
let decrementButton = document.getElementById('dcr');
let resetButton = document.getElementById('reset');
let countElement = document.createElement('h1');
countElement.textContent = count;



let divDesign = document.getElementsByTagName('div');
console.log(divDesign);
 //let targetDiv = divDesign[2];
 divDesign[2].style.width = '300px';
 divDesign[2].style.height = '300px';
 divDesign[2].style.backgroundColor = 'blue';
 divDesign[2].textContent = count;
 divDesign[2].style.alignItems = 'center';
 divDesign[2].style.color = 'white';
 divDesign[2].style.fontSize = '50px';
 divDesign[2].style.display = 'flex';
 //divDesign[2].style.padding = '30px';
 //divDesign[2].style.paddingTop = '60px';
 divDesign[2].style.border = '2px, solid, black';
 divDesign[2].style.borderRadius= '50%';
 divDesign[2].style.justifyContent = 'center';
 divDesign[2].style.cursor = 'pointer';
 const msg = document.querySelector('.msg');
 const mgs = document.querySelector('.mgs');

//  const updateCount=function (){
//     countElement.textContent = count;
//  }

 const incrementCount = function( ) {
    if (count < 50) {
    count++;
    divDesign[2].textContent = count;
 } else {
    msg.classList.add('error');
    msg.innerHTML= 'Counter has reached the maximum limit 0f 50';
 }
} 

const decrementCount = function() {
    if (count > 0) {
        count--;
        divDesign[2].textContent = count;
        //updateCount();
        //divDesign.appendChild(countElement);
    } else {
        //alert('Counter cannot go below 0!');
        mgs.classList.add('error');
        mgs.innerHTML= 'Counter cannot go below 0!';

    }
}

const resetCount = function () {
    count = 0;
    divDesign[2].textContent = count;
}

 incrementButton.addEventListener('click', incrementCount);
 decrementButton.addEventListener('click', decrementCount);
 resetButton.addEventListener('click', resetCount);



 console.log(divDesign);

