// var ; let ; const 
document.write('Hello world');
var myName = "Byran";
var myAge = 17.5; //Replace with your age

// an if statement 
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
    console.log(saySomeThing('JavaScript'));

    const someThing = () => 'JavaScript'; 
    console.log(someThing('JavaScript'));
    
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
    selectedColor.push('orange');
    selectedColor.shift()
    console.log(selectedColor)
    selectedColor.unshift('brown');
    selectedColor.pop()
    console.log(selectedColor.indexOf('brown'));
    console.log(selectedColor.includes('red'));
    console.table(selectedColor.join(','));
    
    selectedColor.sort(function(a,b){
        return a.length-b.length
    })

    console.log(selectedColor);

    const sortSelectedColorAlphabet = function sort(selectedColor) {
        return selectedColor.sort((a,b)=> a.localeCompare(b));
    }
    console.log(sortSelectedColorAlphabet(selectedColor))

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
    console.log(name.split(','));
    console.log(name.split(''));

    let firstName = 'Virgil';
    let secondName = 'Chidubem';
    const surName = 'Ihezuru';

    console.log(`First Name: ${firstName} \nSecond Name: ${secondName} \nSur-Name: ${surName}`); 
    console.log(surName.split(','));
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

const car = {
    name : 'Toyota', 
    leg : 4,
}
console.log(car);
// Concatenation 
/*console.log('This is a '+ name +' and it has a '+ leg +' wheel drive');
console.log(`This is a ${car} and it has a ${leg} wheel drive`)

console.log(car + ' is a very multipurpose vehicle ' + car + ' is a  ' + leg + ' wheel drive.'); 
console.log(`${car} is a very multipurpose vehicle ${car} is a ${leg} wheel drive.`)*/

const s = 'Hello world';

console.log(s.toUpperCase());
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(','));
console.log(typeof s);

const v = ('technology, computer, it, code');

console.log(v.split(','));


// this an Array non-primitive data 
const fruits = ['apples', 'mangoes', 'oranges'];
console.log(fruits[1]);
fruits[3]= 'grapes';
console.log(fruits);
fruits.push('water melon');
console.log(fruits);
fruits.unshift('pear')
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.includes('yam'));
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
 
/*const brands = [
    {
        tag: 'Gucci',
        org: 'Italy',
        collection: 1,
    },
    {
        tag: 'Addidas',
        org: 'Germany',
        collection: 2,
    },
    {
        tag: 'UnderAmor',
        org: 'Bristh',
        collection: 3,
    }
]

console.log(brands[1].tag);
//const brandsJSON = JSON.stringify(brands);
//console.log(brandsJSON);

for (let b = 0; b < brands.length; b++) {
    console.log(brands[b].org);
}

let ds = 0;
while (ds < brands.length) {
    console.log(brands[ds].tag)
    ds++
}

for (let dap of brands){
    console.log(dap.tag);
}*/

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

//high order Array methods
// forEach, map, filter

const pam = todos.filter((todos) =>{
    return todos.id 
})
console.log(pam)

todos.forEach((naeto)=>console.log(naeto.text));

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

if(x === 10) {
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

// function non-primitive data block of codes design to perform specific task 

function nums (num1, num2) {
    return num1 + num2;
}
console.log(nums(4,5));

// Arrow function 
const addNum = (num, num2) =>num - num2
console.log(addNum(10,4));

todos.forEach((tony) => console.log(tony.isCompleted));
todos.forEach(function(tony){
    console.log(tony)
})
class Design {
    constructor(spain, usa, nigeria) {
        this.spain= spain;
        this.usa= usa;
        this.nigeria= nigeria;
    }    
        getUsa(){
            return `${this.usa}`;
        }
}


const clothing = new Design('Gucci','Next', 'Adidas');
console.log(clothing);
console.log(clothing.getUsa())
// Object oriented programming 
// using Constructor function
class Kingdom {
    constructor (imo, akwaIbom, crossrivers) {
        this.imo = imo;
        this.akwaIbom = akwaIbom;
        this.crossrivers = crossrivers;
    }
    getAkwaIbom (){
        return this.akwaIbom;
    }
    getImo() {
        return this.imo;
    }

}

const kingdom= new Kingdom('ama','abak','ugep');
console.log(kingdom);
console.log(kingdom.akwaIbom);
console.log(kingdom.imo);




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
const kingdomJSON= JSON.stringify(kingdom);
console.table(kingdomJSON);


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
ul.firstElementChild.textContent = 'Hello';
ul.children[0].textContent = ('Hellooo');
ul.children[1].textContent = ('Virgil');
ul.lastElementChild.innerHTML = ('V & C')


//ul.lastElementChild.remove();

/*ul.children[0].textContent = 'Ebube'; //or ul.firstElementChild.textcontent = 'Ebube';
ul.children[1].innerText = 'Cecil';
ul.lastElementChild.innerHTML = '<h4>Virgil<h4>';
const li = document.querySelector('.item');
li.style.background = 'red';
const cta =document.querySelector('.cta');

cta.style.background = 'brown';

cta.addEventListener('click', (function(e){
    e.preventDefaul();
    console.log('click');
}))

cta.addEventListener('mouseout', (function(e){
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'skyblue';
    document.querySelector('.items').lastElementChild.innerHTML =
    '<h4>Cecil loves You</h4>';
}))

/*cta.addEventListener('click', (function(e){
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'grey';
    document.querySelector('.items').lastElementChild.innerHTML = '<h4>Love You</h4>';
}))*/

const colors = ['red', 'blue', 'green', 'pink', 'yellow',];
console.log(colors);
colors.push('brown');
console.log(colors);
colors.shift('');
console.log(colors);
colors.unshift('orange');
console.log(colors);
console.log(colors.indexOf('pink'));
console.log(colors.includes('white'))

const joined = ['rainbow', 'colors'];
console.log(joined.join(' '));
const sentence = (joined.join(' '));
console.log(sentence);
console.log(sentence.split(','));
console.log(sentence.toUpperCase())

const ride = ['mecedes', 'benz']
console.log(ride.join(' '));

const course = ['Cyber Security','Wed Development','Data Analysis','UI/UX','Data Science','Sofeware Engineering','Mobile Development'];
console.log(course);

let newCourses = ['Artificial Intelligence', 'Blockchain','Machine Learning','computer Vision','Natural Language Processing','Quantum Computing','Blockchain Development','Biology']


course.push(...newCourses);
console.log(course);

course.pop('');
console.log(course);
course.unshift('Graphic Design');
console.log(course);

const greeting = ['Welcome ', 'to ', 'Netisens ', 'ICT'];
console.log(greeting);

console.log(greeting.join(''));

const coursesByLength = course.sort((a,b)=>b.length - a.length)
console.log(coursesByLength);

const coursesLength = course.sort(function(a,b){
    return b.length - a.length 
})
console.log(coursesLength); 

function sortCourseAlphabetic (course) {
    return course.sort(function(a,b) {
        return a.localeCompare(b) 
    } 
)} 
console.log(sortCourseAlphabetic(course));

const cta = document.querySelector('.cta');



cta.style.background = 'green';

cta.addEventListener('mouseover', (function(e){
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'skyblue'
    //document.querySelector('.items').children[2].innerHTML = 'Love Together'
}));

const myform = document.querySelector('#my-form');
const nameImput = document.querySelector('#name');
const emailImput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myform.style.background = '#eab725';
myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    //console.log(nameImput.value);

    if (nameImput.value === '' || emailImput.value === '') {
        //alert('Your informations please');
        msg.classList.add('error');
        msg.textContent = ('Your informations please')
         setTimeout (() =>msg.remove(), 2000);
    } else {
        console.log('successful')
    }
}

/*myform.addEventListener('submit', onsumbit);
//  for (let i = 1; 1 < 10; 1+=2) {
            console.log("")
    }  
function onsumbit(e){
    e.preventDefault();

    //console.log(nameImput.value); texting the command 

    if (nameImput.value === '' || emailImput.value === '') {
        alert('please fill in your informations');
       // msg.classList.add('error');
        //msg.innerHTML = 'Please fill in your informations';

        setTimeout (()=> msg.remove(), 3000);
    } else{
        //console.log('success'); // a form validation
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameImput.value} : ${emailImput.value}`));

        usersList.appendChild(li);

        //clear fields
        nameImput.value = '';
        emailImput.value = '';

    }
}
    */
const twenty = []
for (let c = 1; c < 21; c++) {
    twenty.push(c);
}
console.log(twenty);

function Even(number) {
    if (number % 2===0){
        return (`Even`);
    }else {
        return (`odd`);
    }
}
console.log(Even('2'));
console.log(Even('3'));

function number (n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
} 
console.log(number(8));

/*Challenge: FizzBuzz Game
Print numbers from 1 to 30, but:

Print "Fizz" for multiples of 3.
Print "Buzz" for multiples of 5.
Print "FizzBuzz" for multiples of both 3 and 5.
Hint: Use the if-else statements with modulus (%).*/

for (let num = 1; num < 31; num++) {
    if (num % 3===0 && num % 5===0) {
        console.log('FizzBuzz');
    } else if (num % 3===0){
        console.log('fizz');
    } else if (num % 5===0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

const colours = ['red', 'blue', 'white', 'green', 'pink'];
console.log(colours);
colours[3]='purple'
console.log(colours);
colours.push('lemon green');
colours.unshift('navy blue');
console.log(colours);
console.log(colours.indexOf('pink'))
console.log(colours.includes('gold'))


/*const coloursLength = colours.sort(function(a,b){
    return a.length - b.length
})
console.log(coloursLength);

function sortColoursAlphabetic (colours){
    return colours.sort(function(a,b){
        return a.localeCompare(b);
    })
}
console.log(sortColoursAlphabetic(colours));

let array = ('Hello World')
console.log(array.split(','));*/

/*const coloursLenght=colours.sort((a,b)=>a.length-b.length);
console.log(coloursLenght);

const sortcoloursAlphabet=((colours)=>colours.sort((a,b)=>a.localeCompare(b)))
console.log(sortcoloursAlphabet(colours));*/

const coloursLenght = colours.sort((a,b)=>a.length - b.length);
console.log(coloursLenght);

const sortColoursAlphabet = function alphabet(colours){
    return colours.sort((a,b)=>a.localeCompare(b));   
}
console.log(sortColoursAlphabet(colours))

const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
const bi = document.querySelector('.bi');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.style.width === '3%' || input.style.width === '' ) {
        input.style.width = '80%';
    } else {
        input.style.width = '3%';
    }

});

const coloursJson= JSON.stringify(colours);
console.log(coloursJson);