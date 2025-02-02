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

let divDesign = document.getElementsByTagName('div');
console.log(divDesign);
 //let targetDiv = divDesign[2];
 divDesign[2].style.width = '300px';
 divDesign[2].style.height = '300px';
 divDesign[2].style.backgroundColor = 'blue';
 divDesign[2].innerText = count;
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

 const incrementCount = ( ) => {
    count==;
    divDesign[2].textContent = count;
 }

 incrementButton.addEventListener('click', incrementCount)



 console.log(divDesign);

