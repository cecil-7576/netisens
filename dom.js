//EXAMINE THE DOCUMENT OBJECT 

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'item lister'
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);

// GETELEMENTBYID
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
console.log(headerTitle);
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
 var itemList = document.querySelector('#items')
//  parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'red';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = 'blue';
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'green';
// itemList.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = 'white';
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

//parentElement is the same as parentNode
//console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// childrenNodes
console.log(itemList.children)
// console.log(itemList.children[0]);
// itemList.children[0].style.backgroundColor = 'yellow';
// itemList.children[1].style.backgroundColor = 'red';
// itemList.children[2].style.backgroundColor = 'green';

// // FirstChild same as LastChild
// console.log(itemList.firstChild);

// // FirstElementChild same as Lastchild
//console.log(itemList.lastElementChild);
// itemList.firstElementChild.textContent = 'Number 1';

// // NextSibling 
// console.log(itemList.nextSibling);
 console.log(itemList.nextElementSibling);
//  console.log(itemList.previousElementSibling);
  itemList.previousElementSibling.style.backgroundColor = 'pink';
//  itemList.previousElementSibling.style.borderRadius = '5px';
//  itemList.previousElementSibling.style.color = 'white';
let span = document.getElementsByTagName('span');
console.log(span);
let spanText = document.createTextNode('Im a span with Text');
console.log(spanText);

let input = document.getElementsByTagName('input');
console.log(input);
input[0].value = 'placeholder';
input[0].style.fontSize = '15px';
input[1].value = 'Send';
input[1].style.backgroundColor = 'green';
console.log()


// CreateElement 
// Create a div

 var newDiv = document.createElement('div');
 
 console.log(newDiv);
 newDiv.className = 'Hello';
 newDiv.id = 'Hi';
 newDiv.setAttribute('title', 'Hello Div');

 var newDivText = document.createTextNode('Hello world, im a new div from js');

 newDiv.appendChild(newDivText);

 let container = document.querySelector('.containe #main');
 let h1 = document.querySelector('.containe .title');

 console.log(newDiv);
 container.insertBefore(newDiv, h1);
 container.style.fontSize = '13px';
 container.style.padding = '10px'





// console.log(newDiv);


// const person = {
//     name : 'Mary',
//     age : 30,
//     address : ['w60 Busa Buji',
//         'Street Jos'
//     ]
// }

// console.log(person);
// person.name = 'Joseph';
// console.log(person);
// person['age']= 29;
// console.dir(person);
// console.log(person);

function hello(callback){
  
    console.log('Hello')
  callback()
}

hello(wait);

function goodbye (){
  console.log('Goodbye')
}

function wait (){
  console.log('Wait')
}

function sum(call, x, y) {
  let result = x + y;

  call(result)
}

function displayConsole(result){
  console.log(result)
}

sum(displayPage, 5, 10);

function displayPage(result){
  document.getElementById("dom").textContent = result;
}


// Asynchronous programming in javaScript 
// callBacks;

/*const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPost (){
  setTimeout(()=>{
    let outPut = "";
    for (let post of posts) {
      outPut += `<li>${post.body}</li>`
    };
    document.body.innerHTML = outPut
  }, 2000)
  
}

function createPost(post, callback){
  setTimeout(()=>{
    posts.push(post);
    callback();
  }, 3000);
}


// createPost({title: 'Post Three', body: 'This is post three'}, getPost);*/

// promise 

// const posts = [
//   {title: 'Post One', body: 'This is post one'},
//   {title: 'Post Two', body: 'This is post two'}
// ];

// function getPost (){
//   setTimeout(()=>{
//     let outPut = "";
//     for (let post of posts) {
//       outPut += `<li><em>${post.body}</em></li>`
//     };
//     document.body.innerHTML = outPut
//   }, 2000)
  
// }

// function createPost(post){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       posts.push(post);

//       const error = false;

//       if (!error){
//         resolve('All correct');
//       } else {
//         reject('Error: Something went wrong')
//       }
//     }, 3000);
//   })
// }

// createPost({title: 'Post Three', body: 'This is post three'}).then(getPost)

// let scores = [
//   {subject:'maths', score: 70 , day: 'monday'},
//   {subject:'chemistry', score: 50, day: 'tuesday'},
//   {subject:'chemistry', score: 99, day: 'wednesday'},
//   {subject:'french', score: 45, day: 'thursday'},
//   {subject:'agric', score: 20, day: 'friday'},
//   {subject:'biology', score: 1, day: 'satuday'},
// ]; 

// const points = [23, 45, 17, 20, 2, 400];

// points.forEach(function(point){
//   console.log(point);
// });
//  const getpoints = points
//  .map(map=> map*2)
//  .filter(filter=> filter >=35)
//  .sort((a, b)=>a - b)
//  .reduce((c,d)=>c + d)
 

//  console.log(getpoints)
// const mapScores = scores
// .map( m=> m.score/2)
// .filter((f)=> f.score >= 45)
// .forEach(function(score){
//   console.log(score)
// })

// function getScores(){
//   setTimeout(function(){
//     let result = "";
//   for(let score of scores) {
//     result += `<li>${score.subject}</li>`
//   }
//   document.body.innerHTML = result;
//   }, 1000)

// }

// getScores();

// function addScores(score){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       scores.push(score);

//       const error = true;

//       if(!error){
//         resolve()
//       } else {
//         reject('Error: Something went wrong')
//       }

//     }, 2000);
//   })
  
// }
// addScores({subject:'geography', score: 100, day: 'sunday'})
// .then(getScores)
// .catch(err=>console.log(err));


// let goals = [
//   {subject:'maths', score: 70 , day: 'monday'},
//   {subject:'chemistry', score: 50, day: 'tuesday'},
//   {subject:'chemistry', score: 99, day: 'wednesday'},
//   {subject:'french', score: 45, day: 'thursday'},
//   {subject:'agric', score: 20, day: 'friday'},
//   {subject:'biology', score: 1, day: 'satuday'},
// ]; 

// const getGoals = ()=>{
//     setTimeout(function(){
//       let result = "";
//       for (let goal of goals){
//         result += `<li>${goal.score}</li>`
//       }
//       document.body.innerHTML = result
//     }, 6000)
// }

// const createGoals = function (goal, callBackFn){
//   setTimeout(function(){
//     goals.push(goal)
//     callBackFn()
//   }, 6500)
// }

// createGoals({subject:'geography', score: 100, day: 'sunday'}, getGoals)

// const createGoals = (goal)=>{
//   return new Promise((resolve, reject)=>{
//      setTimeout(function(){
//       goals.push(goal)

//       let error = false;
//     if (!error){
//       resolve()
//     } else {
//       reject('Error: not correct')
//     }
//      }, 6500)
//   })
// }

// Async / Await 
// async function init(){
//  await createGoals({subject:'geography', score: 100, day: 'sunday'});

//  getGoals();
// }

// init();

// async function fetchUser (){
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
//   const data = await res.json();

//   console.log(data);
// }

// fetchUser()
// createGoals({subject:'geography', score: 100, day: 'sunday'})
// .then(getGoals)
// .catch(err=> console.log(err))

// Promise.all

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>setTimeout(resolve,2000, 'Goodmorning')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(map=> map.json());

// Promise.all ([promise1, promise2, promise3, promise4]).then(values => console.log(values))
// function task1(callback){
//   setTimeout(()=>{
//     console.log('1. Have your kettle');
//     callback()
//   }, 2000);
 
// }

// function task2(callback){
//   setTimeout(()=>{
//     console.log('2. Put water in it');
//     callback()
//   }, 1000);
 
// }

// function task3 (callback){
//   setTimeout(()=>{
//     console.log('3. Boil it to 100 degrees');
//     callback()
//   }, 1300);
// }

// function task4 (callback){
//   setTimeout(()=>{
//     console.log('4. Have your powered custard in a plate');
//     callback()
//   }, 5000);
// }

// function task5 (callback){
//   setTimeout(()=>{
//     console.log('5. Mix with a little amount of water');
//     callback()
//   }, 2500);
// }

// function task6 (callback){
//   setTimeout(()=>{
//     console.log('6. Add the boiled water and stare it to semi-solid');
//     callback()
//   }, 4000);
// }

// function task7 (callback){
//   setTimeout(()=>{
//     console.log('7. And walah you have made your self a bowl of custard');
//     callback()
//   }, 500);
// }

// task1(()=>{
//   task2(()=>{
//     task3(()=>{
//       task4(()=>{
//         task5(()=>{
//           task6(()=>{
//             task7(()=>{

//             })
//           })
//         })
//       })
//     })
//   })
// })

// const showMessage = (callback)=>{
//   console.log(callback);
// };

// const firstMessage = (callback)=>{
//   setTimeout(()=>{
//     showMessage('Hello')
//     callback()
//   }, 1000)
// };

// const secondMessage = (callback)=>{
//   showMessage('world')
//   callback()
// };

// const thirdMesssage = (callback)=>{
//   showMessage('welcome')
//   callback()
// }

// const fourthMessage = (callback)=>{
//    showMessage('To Class of JavaScript');
//    callback()
// }

// firstMessage(()=>{
//   secondMessage(()=>{
//     thirdMesssage(()=>{
//       fourthMessage(()=>{

//       })
//     })
//   })
// });
// const pro = new Promise ((resolve, reject)=>{
//   setTimeout(()=>{
//     let age = 12;

//     if (age){
//       resolve('true')
//     } else {
//       reject('false')
//     }
//   }, 2500)
    
// });

// pro
// .then((value)=> console.log(value))
// .catch((error)=>{console.log(error)})

// const promise = new Promise((resolve, reject)=>{
//   resolve('Well done! Promise one is resolved')
// });

// const promise2 = new Promise((resolve,reject)=>{
//   resolve('Well done! Promise two is resolved')
// });

// const promise3 = new Promise((resolve,reject)=>{
//   reject('Ein no pure! Promise three is not resolved')
// })
// promise
// .then((value)=>{
//   console.log(value)
//   return promise2;})
// .then ((value)=>{
//   console.log(value)
//   return promise3
// })
// .catch((error)=>{
//   console.log(error)
// });

// const fulfill = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       let num = true;

//       if(num){
//         resolve('the Match is 4pm')
//       } else {
//         reject('the match is 4.30pm')
//       }
//     }, 1200)
// });

// fulfill.then((value)=>{
//  console.log(value);
// });

// const match = (callback)=>{
//   console.log(callback)
// }

// const ManU = (callback)=>{
//   setTimeout(()=>{
//     match('Manchester United')
//     callback()
//   }, 2500)
// };

// const ManC = ()=>{
//     match('Manchester City')
    
// };

// ManU(ManC)

// const promiseOne = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     reject('Promise one resolved!')
//   }, 2000)
// })

// const promiseTwo = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('Promise two resolved!')
//   }, 1500)
// })

// Promise.all([promiseOne, promiseTwo])
// .then((value)=>{console.log(value [0], value[1])})
// .catch((error)=>{console.log(error)})

// function championsLeague1(callback){
//   setTimeout(()=>{
//     console.log('Arsenal Vs Real Madrid');
//     callback()
//   }, 3000);
// }

// function championsLeague2(callback){
//   setTimeout(()=>{
//     console.log('ended Arsenal 3 : Real Madrid 0');
//     callback()
//   }, 2000);
// }

// function championsLeague3(){
//   setTimeout(()=>{
//     console.log('Arsenal Fc won with 3 goals and 3 points');
//   }, 1000);  
// };

// championsLeague1(()=>{
//   championsLeague2(()=>{
//     championsLeague3(()=>{

//     })
//   })
// })

function separateEvenOdd (){
  let even = [];
  let odd = [];

  for (let i = 0; i <= 50; i++){

    let result = i 

    if (result %2 === 0){
      even.push(result)
    } else {
      odd.push(result)
    }
  }
  return {even, odd}
}

console.log(separateEvenOdd())

// const nameAndPasswordHolder = (name, password)=>{
//   return name, password}

//   console.log(nameAndPasswordHolder())
// // console.log('john, 1234')

// const preHeatOven = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       const preHeatOven = true;

//       if (preHeatOven){
//         resolve('Preheat oven to 180deg')
//       } else {
//         reject('fail task')
//       }
//     }, 1000)
//   })
// };  

// const addSugarAndChocoChips = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       const addChoco = true;

//       if (addChoco){
//         resolve('Place butter and chocolate chips, stir until melted and smooth')
//       } else {
//         reject('fail task')
//       }
//     }, 1000)
//   })
// };  

// const addFlourCocoaAndSalt = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       const addFlour = true;

//       if (addFlour){
//         resolve('Add flour, cocoa and salt, stri until smooth')
//       } else {
//         reject('fail task')
//       }
//     }, 1000)
//   })
// };  

// const bakeMixture = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       const bakeMixture = true;

//       if (bakeMixture){
//         resolve('Bake for 24 minutes for really goofy center ')
//       } else {
//         reject('fail task')
//       }
//     }, 1000)
//   })
// };  


// // const bakeChocolateBrownies = async ()=>{
// //   const taskOne = await preHeatOven();
// //   console.log(taskOne);

// //   const taskTwo = await addSugarAndChocoChips();
// //   console.log(taskTwo);
  
// //   const taskThree = await addFlourCocoaAndSalt();
// //   console.log(taskThree)

// //   const taskFour = await bakeMixture();
// //   console.log(taskFour)

// //   console.log('Enjoy your perfect Chocolate brownies')

// // }

// const bakeChocolateBrownies = async ()=>{

// try {
  
//     const taskOne = await preHeatOven();
//     console.log(taskOne);
  
//     const taskTwo = await addSugarAndChocoChips();
//     console.log(taskTwo);
    
//     const taskThree = await addFlourCocoaAndSalt();
//     console.log(taskThree)
  
//     const taskFour = await bakeMixture();
//     console.log(taskFour)
  
//     console.log('Enjoy your perfect Chocolate brownies')
  
//   } catch (error) {
//   console.log(error)
// }

// }
// bakeChocolateBrownies()

// function saySomething (callback){
//   console.log(callback)
// }

// const sayOne = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     let sayOne = true;
//     if(sayOne){
//       resolve('NaetoBoi a great child like king Solomon')
//     } else {
//       reject('His is always a great child like king Solomon')
//     }
//     }, 2000)
//   })

//   sayOne.then((value)=>{console.log(value)})
  
// function sayTwo (){
//   setTimeout(()=>{
//     console.log('is a great child like king Solomon')
//   }, 1000)
// }

// sayOne(()=>{
//   sayTwo(()=>{

//   })
// })


// fetch('https://dummyjson.com/products/1', {})
// .then(value=>console.log(value))
// .catch((error)=>{console.log(error)})


function numbers (a,b){
  let result = a + b

  console.log(result)
}

// console.log('Answer:',numbers(2, 5));


function convertfahreTOcelsisus (f){
  return f = (f * 1.8) + 32

}

console.log(convertfahreTOcelsisus(20));

function convertCelsiusTofahren (c){
  // let y = (9/5) + 32
  return c = (c-32)* 0.55
}

console.log(convertCelsiusTofahren(5))

// giving an array of numbers and a target some, write a js function that finds two numbers that add up the target sum 


// let numbers = [3, 5, 1, 7, 9];
// let target = 10;
// function findSum(){

// }

// const points = [23, 45, 17, 20, 2, 400];

// function totalSum (){
//   const pp = points.reduce((a,b)=> a + b, 0)
//  console.log(pp)
// }

// totalSum()

// const p = [23, 45, 17, 20, 2, 400]

// function totalSum(p){
//   let total = 0;
//   for (let i = 0; i < p.length; i++){
//     total +=p[i]
//   }
//   console.log(total) ;
// }
// totalSum(p)
// console.log(total)

const arr = [2, 6, 9, 10, "john"];

// const peter = arr
// .sort((a, b)=> b-a)
// .reduce((a,b)=> a + b, 0)


// console.log(peter)

function sumOfArr(arr){
let result= 0;

for(let i = 0; i < arr.length;i++){
result+=arr[i]
};



console.log(result);
};

sumOfArr(arr);

function addSum(arr){
  let outCome = 0;

  for (let are of arr){
    outCome+=are 
  }

  console.log(outCome)
};

addSum(arr)

function getSum (){
  const get = arr.reduce((total, array)=>total + array, 0)

  console.log("total sum: ", get);
}

getSum()

// const tacksOne = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       let tacksOne = true;
//       tacksOne ? resolve('Hello World') : reject('Not here');
//     }, 750)
//   })
// }
  

// const tacksTwo = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       let tacksTwo = true;
//     if (tacksTwo){
//       resolve('Welcome to JavaScript')
//     } else {
//       reject('Not here')
//     }
//     })
//   })
// }

// const tacksThree = ()=>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{

//       let tacksThree = true;
//       if (tacksThree){
//         resolve('Just Learn')
//       } else {
//         reject('Not here')
//       }
//     }, 1500)
//   })

// }

// const allTacks123 = async ()=>{
//   try {
//     const tacks1 = await tacksOne()
//   console.log(tacks1)

//   const tacks2 = await tacksTwo()
//   console.log(tacks2)

//   const tacks3 = await tacksThree()
//   console.log(tacks3)

// } catch (error){
//  console.log(error)
// }
  
// }
// allTacks123();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))


// tacksOne
// .then((value)=>{console.log(value)
//   return tacksTwo;})
// .then((value)=>{console.log(value)
//   return tacksThree;})
// //  .then((value)=>console.log(value)) 
// .catch((error)=>console.log(error)) 
  // Promise.all([tacksOne, tacksTwo, tacksThree])
  // .then((value)=> console.log(value))
  // .catch((error)=> console.log(error))


// const reverser = [1,2,3,4,5,6,7];

// function rev (){
//   console.log(reverser.reverse())
//   // const versal = reverser.sort((a, b)=> b-a)
//   // console.log(versal)
// }

// rev()


function namePassword(name, password){
  let user = {
    name : name,
    password : password
  }

  return user
}

// const myUser = 
console.log(namePassword('John', '7879'));
// console.log(myUser)

function createPassword(name, password){
  let user = {
    name : name,
    password : password
  }
  return user
}

const enter = createPassword('John', '1234');

console.log(enter);


// const numb = [1,2,3,4,5,6,7];

// function rare(){
//  console.log(numb.reverse())
// }
 
// rare();

// function reversal (){
//   const back = numb.sort((a, b)=> b-a);

//   console.log(back)
// }

// reversal()

function vowelAndConsonant (str){
  const vowels = 'aeiou';
  let vowelCount = 0;
  let consonantCount = 0;

for (let alphabet of str){
  if(/[a-zA-Z]/.test(alphabet)){
    if(vowels.includes(alphabet)){
      vowelCount++
    } else {
      consonantCount++
    }
  }
}
  return {
    vowels : vowelCount,
    consonant : consonantCount,
    total : vowelCount + consonantCount
  }
}

console.log(vowelAndConsonant('juan'))


// const nnumbers = [3, 7, 2, 9, 5];

// function greatestNum(){
//   const ginger = nnumbers.find((gin)=>{
//     return gin > 7;
//   })
//   console.log(ginger);
// }

// greatestNum()
  
const nnumbers = [3, 7, 2, 9, 5];

function greatestNum(nnumbers){
  if(nnumbers.length === 0){
    return null
  }
  console.log(nnumbers.reverse())
  return Math.max(...nnumbers)
}

console.log(greatestNum(nnumbers))

function addEvenOdd(nnumbers){
  evenNumb = [];
  oddNumb = [];

  for (let eo of nnumbers){
    if (eo %2 === 0){
      evenNumb.push(eo)
    } else {
      oddNumb.push(eo)
    }
  }

return {evenNumb, oddNumb}
}

console.log(addEvenOdd(nnumbers));

function addNnum(nnumbers){
  let result = 0;

  for (let an of nnumbers){
    result+=an
  }
  return result
}

console.log(addNnum(nnumbers))


// callback 
// const nnumbers= [3, 7, 2, 9, 5];
function appearBack(nnumbers){
  return  nnumbers.sort((a,b)=> b-a )
}

console.log(appearBack(nnumbers))


// const getAllProducts = async function (){
//   try{
//     const response = await fetch('https://dummyjson.com/products/', {});
//       const json = await response.json();
//       console.log(json)
//   } catch (error){
//     console.log(error)
//   }
// }

// getAllProducts()


// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: {
//     'Content-Type' : 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'Iphone wrisk watch series 4',
//     description: 'series 3',
//     category: 'wrisk watch black color',
//     price: '159.99'
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error=> console.log(error))

const getAllProducts = async ()=>{
  try {
    const cecilio = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title: 'Iphone wrisk watch series 4',
        description: 'series 3',
        category: 'wrisk watch black color',
        price: '159.99'
      })
    })
    const json = await cecilio.json();
    console.log(json)
  } catch (error){
    console.log(error)
  }
}

getAllProducts()

fetch()
.then(response=> response.json())
.then()

