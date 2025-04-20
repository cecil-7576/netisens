input = document.getElementById('inputOutCome');
buttons = document.querySelectorAll('button');

let number = "";
// arr = Array.from(buttons);

for(let button of buttons) {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        if(e.target.innerHTML === "="){
            number = eval(number);
            input.value = number;
        } 
        
        else if(e.target.innerHTML === "AC"){
            number = "";
            input.value = number;
        }

        else if(e.target.innerHTML === "DE"){
            number = number.substring(0, number.length-1)
            input.value = number;
        }
        else {
            number += e.target.innerHTML;
            input.value = number;
        }
        
    })
}

