
document.write('Hello world');
var myName = "Byran";
var myAge = 17.5; //Replace with your age

if (myAge >= 18) {
    console.log(myName + ", you are eligible to vote.");
} else {
    console.log(`${myName}, you are not eligible to vote.`);
}

let balance = 100000;
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

// (\n) is a line-breaker, like how we use <br> in html
console.log(`Name: ${name} 
    \nEmail: ${email} 
    \nAge: ${age} 
    \nPhone Number: ${phone}.`);

    console.log('Name: ' + name + 
        ', Email: ' + email + 
        ', Age:' + age + 
        ', Phone Number : ' + phone + '.');
    
    
        function saySomeThing() {
        return "JavaScript";
    }
    console.log(saySomeThing());
    
    let tt = 5 >= 3;
    let ft = 5 !== 3;
    let mm = 5 <= 3;

    console.log(typeof tt)

    console.log(`Tt: ${tt} \nFt: ${ft} \nMm: ${mm}`);
    console.log('Tt: ' + tt + ', Ft: ' + ft ) 

    for (let i = 1; i < 5; i++){
        console.log("The number is " + i )
    };

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
    // types of Primitives data

    let hisName = 'Mosh'; // String literally 
    let hisAge = 30; // Number literally
    let isApproved = false; // Boolean literally
    let hisFirstName = undefined; // Underfined literally
    let allowedColor = null; // Object literally


    // null primitive data gives rise or results to non primitive or relative data

    // my first Obeject data
    let person = {
        name: 'Mosh',
        age: 30,
    }

    // Dot Notation to make corrections 
    person.name = 'John';
    person.age = 31; 
    
    /*Bracket Notation */
    person ['name'] = 'Mary';

    console.log(person)
    
    // My first Array data

    const selectedColor = ['red', 'blue','3', 'white'];
    selectedColor.push = 'orange';
    selectedColor.unshift = 'brown';
    selectedColor.pop()
    console.log(selectedColor);

    const selectedColorJSON = JSON.stringify(selectedColor);
    console.log(selectedColorJSON);

    name = 'Cecilia'
    let human = {
        name: 'Cecilia',
        age: 25,
    }

    console.log('Hello, ' + name);
    console.log(`Hello, ${name}`);
    console.log(name.length);
    console.log(typeof name);
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    console.log(name.substring(0, 5).toUpperCase());
    console.log(name.split(''));

    let firstName = 'Virgil';
    let secondName = 'Chidubem';
    const surName = 'Ihezuru';

    console.log(`First Name: ${firstName} \nSecond Name: ${secondName} \nSur-Name: ${surName}`); 
    console.log(surName.split(''));
    console.log('First Name:' +firstName)
    console.log('Second Name:' +secondName)
    for (let i = 0; i < 10; i+=2) {
        console.log(i)
    }

    const num = []
    for (let i =1; i <= 10; i+= 2) {
        num.push(i)
    }
    console.log(num)


    const pinCode = []
    for (let i = 0; i <= 10; i++) {
        let pin = i.toString().padStart(2, '0')
        pinCode.push(pin)
    }
    console.log(pinCode)
    pinCode['004'] = 'white';

    console.error('This is an Error');
    console.warn('This is a warning');
    
console.log(typeof pinCode)
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof allowedColor)
console.log(typeof isApproved)

const car = 'Toyota';
const leg = 4;

// Concatenation 
console.log('This is a '+ car +' and it has a '+ leg +' wheel drive');
console.log(`This is a ${car} and it has a ${leg} wheel drive`)

console.log(car + ' is a very multipurpose vehicle ' + car + ' is a  ' + leg + ' wheel drive.'); 
console.log(`${car} is a very multipurpose vehicle ${car} is a ${leg} wheel drive.`)

const s = 'Hello world';

console.log(s.toUpperCase());
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(typeof s);

const v = ('technology, computer, it, code');

console.log(v.split(','));


// this an Array non-primitive data 
const fruits = ['apples', 'mangoes', 'oranges'];
console.log(fruits[1]);
fruits[3]= 'grapes';
console.log(fruits)
fruits.push('water melon');
console.log(fruits);
fruits.unshift('pear')
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('mangoes'));

// this is an Object non-primitive data
const man = {
    manFirstName: 'Peter',
    manLastName: 'Doe',
    manAge: 40,
    hobbies: ['football', 'Driving', 'sleeping'], // More than one value holder
    homeAddress: {
        street: '77 statlite Town',
        city: 'Uyo',
        state: 'Akwa Ibom',
    }
};
man.manLastName ='Ify';

console.log(man);

// an Arrays of Objects
const todos = [
{
    id: 1, // Numeric or Number literal
    text: 'Take out trash',  // sring literal
    isCompleted: true  // Boolean literal
},
{
    id: 2,
    text: 'School runs',
    isCompleted: true
},
{
    id: 3,
    text: 'Doctors appointment',
    isCompleted: false
},
];

console.table(todos);
console.log(todos[2].text);
console.log(todos[1].isCompleted);

// JSON data is to push data to server

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

const manJSON = JSON.stringify(man);
console.log(manJSON);

// for loop
for (let p = 2; p < 6; p+=2) {
    console.log('For loop number: ' + p);
}

// while loop
let q = 0;
while (q < 3) {
    console.log('while loop Number: ' + q);
    q++
}

for (let i=0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let sq of todos) {
    console.log(sq.text);
}

for (let r=0; r < todos.length; r++) {
    console.log(todos[r].text);
}

let j = 0;
while (j < todos.length) {
    console.log(todos[j].isCompleted);
    j++;
}

for (let data of todos) {
    console.log(data.text);
}

//high order Array methods
// forEach, map, filter

const pam = todos.filter((todos) =>{
    return todos.id 
})
console.log(pam)
todos.forEach(function(naeto){
    console.log(naeto.text);
});
todos.forEach(function(Ify){
    console.log(Ify.id)
})

const todosId = todos.map(function(todos){
    return todos.id
})
console.log(todosId);

const marp= todos.map(function(todos){
    return todos.text
});
console.log(marp);

const todocompleted= todos.filter(function(todos){
    return todos.isCompleted == true;
});
console.log(todocompleted);

const incom = todos.filter(function(todos){
    return todos.isCompleted == false;
});
console.log(incom);

const marpJSON = JSON.stringify(marp);
console.log(marpJSON);

//conditions 

const x = 20;

if(x === 20) {
    console.log('x is 10');
} else if(x < 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

const xJSON = JSON.stringify(x);
console.log(xJSON);

// you can || as or and && as and 

const b = 11;
// : is refered to as either 
const color = b > 10 ? 'red' : 'blue'; // this operator is alternary

console.log(color);

const d = 9;

const colour = d > 0 ? 'red' : 'blue';
console.log(colour);

switch(colour) {
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is NOT red or blue');
        break;    
}
console.log(colour);


// function non-primitive data 
function nums (num1, num2) {
    return num1 + num2;
}
console.log(nums(4,5));

// Arrow function 
const addNum = (num, num2) => {
    return num - num2
}
console.log(addNum(10,4));

todos.forEach((tony) => console.log(tony.isCompleted));
todos.forEach(function(tony){
    console.log(tony)
})

// Object oriented programming 
// using Constructor function
function Person(tribeNAme, engNAme, dob) {
    this.tribeNAme = tribeNAme;
    this.engNAme = engNAme;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    
}

// Instantiate object with the constuctor object 
const person1 = new Person('Cecil', 'Ihez', '10-6-1989');
const person2 = new Person('onye', 'Ihez', '18-10-1970');

console.log(person1.getBirthYear());
console.table(person1);
todos.forEach((iphone)=>{
    console.log(iphone.text);
})

const todosEvery = todos.map(function(todos){
    return todos.id;
})
console.log(todosEvery);

// Class is much preferable than function in object oriented programming 
class Car {
    constructor (carName, carModel, carYear) {
    this.carName = carName;
    this.carModel = carModel;
    this.carYear = new Date(carYear);
    }

    getCarYear() {  // function data
        return `${this.carYear}`;
    }

    getCarModel() {  // arrow function data 
        return `${this.carModel}`;
    }

}


const car1 = new Car('Toyota', 'Corolla', '03-02-2006');

console.log(car1.carModel);

const car1JSON = JSON.stringify(car1);
console.log(car1JSON);

console.log(car1.getCarYear());
console.log(car1.getCarModel());
console.log(car1);

 class Phone {
    constructor (techno, samSung, motoRolla) {
        this.techno = techno;
        this.samSung = samSung;
        this.motoRolla = motoRolla;
        Phone.prototype.getMotoRolla = () => {
            return `${motoRolla}`;
        }
    }
 }


const handSet = new Phone ('Phantom', 'Edge', 'Razor flip')

console.log(handSet);
console.log(handSet.getMotoRolla())

class Imo {
    constructor (owerri, oguta, orlu, orsu) {
        this.owerri = owerri;
        this.oguta = oguta;
        this.orlu = orlu;
        this.orsu = orsu;
    }
    getOrlu() {
        return `${this.orlu}`;
    }
    getThreeLga() {
        return `${this.orsu} ${this.oguta} ${this.orlu}`;
    }
    
}

const state = new Imo ('Douglas', 'Egwe', 'Banana Junction', 'Awo');
console.log(state);
console.log(state.getOrlu());
console.log(state.getThreeLga());

const stateJSON= JSON.stringify(state);
console.log(state);

class Wife {
    constructor(wifeName,wifeAge,wifeJob){
        this.wifeName= wifeName;
        this.wifeAge= new Date(wifeAge);
        this.wifeJob= wifeJob;
    }    
    getBirthYear = function () {
        return `${this.wifeAge}`;
    }

    getWifeJob(){
        return `${this.wifeJob}`;
    }

}


const Lady= new Wife('Chidubem', '33', 'Fire service');
console.table(Lady);
console.log(Lady.getBirthYear());
console.log(Lady.getWifeJob())
console.log(window);// parent object of the browser 

//mainJs
/* DOM (document object method) known as the tree structure of the website or document*/

// types of selectors  
// Single elements selectors
const form= document.getElementById('my-form');
console.log(form);
let section= document.querySelector('.body1');
console.log(section)
var title = document.querySelector('title');
console.log(title);



//Multiple elements selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('item'); // high order array
items.forEach(function(item){
console.log(item);
})

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.children[0].textContent = 'Ebube'; //or ul.firstElementChild.textcontent = 'Ebube';
ul.children[1].innerText = 'Cecil';
ul.lastElementChild.innerHTML = '<h4>Virgil<h4>';
const li = document.querySelector('.item');
li.style.background = 'red';


const cta =document.querySelector('.cta');

cta.style.background = 'brown';
cta.addEventListener('click', (function(e){
    e.preventDefaul();
    console.log(e.target);
}));