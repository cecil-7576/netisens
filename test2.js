
document.write('Hello world');
let myName = "Byran";
let myAge = 16; //Replace with your age

if (myAge >= 18) {
    console.log(myName + ", you are eligible to vote.");
} else {
    console.log(myName + ", you are not eligible to vote.");
}

let balance = 10000;
let withdrawal = 15000;

if (withdrawal <= balance) {
    console.log('Transaction successful');
} else {
    console.log('insuficient funds !!!');
}   

let name = "Ebube";
let email = "pharm.cecil@gmail.com";
let age = 30;

let phone = "07067384367";

console.log(`Name: ${name} 
    \nEmail: ${email} 
    \nAge: ${age} 
    \nPhone Number: ${phone}`);
    
    function saySomeThing() {
        console.log("function are always called upon")
    }
    saySomeThing()
    
    let tt = 5 >= 3;
    let ft = 5 !== 3;
    let mm = 5 <= 3;

    console.log(`Tt: ${tt} \nFt: ${ft} \nMm: ${mm}`);

    for (let i = 1; i < 10; i++){
        console.log("The number is " + i + "<br>")
    }
