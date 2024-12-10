
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

const phone = "07067384367";

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

    let iLikeMeat = true;
    let iLikeFish = false;

    console.log(`male: ${iLikeMeat} \nfemale: ${iLikeFish}`);

    var youLIkeMeat = true;
    var myNum = 10;

    if  (myNum ==10) {
        document.write(" ,Yes i like meat..")
    } else {
        document.write(" ,No im a vegetarian")
    }

    let myGap = 29;

    if (myGap>=30) {

        console.log("You are over 30");
    } else {
        console.log("you are below 30")
    }

    let hisName = 'Mosh';
    let hisAge = 30;
    let isApproved = false;
    let hisFirstName = undefined;
    let allowedColor = null;

    let person = {
        name: 'Mosh',
        age: 30,
    }

    // Dot Notation 
    person.name = 'John';
    person.age = 31;

    /*Bracket Notation */
    person ['name'] = 'Mary';

    console.log(person)

    let selectedColor = ['red', 'blue','3', 'white'];
    selectedColor[4] = 'orange';
    selectedColor[5] = 'brown';
    console.log(selectedColor);

    let human = {
        name: 'Cecilia',
        age: 25,
    }

    console.log('Hello, ' + name);

