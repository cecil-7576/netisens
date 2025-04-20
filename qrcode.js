// function formatName(func, firstName,lastName){
//     func(firstName, lastName);
// }



// function printFullName (firstName,lastName){
//     console.log(`My fullname is ${firstName} ${lastName}`)
// }

// formatName(printFullName, "Moses", "Bliss");

// function multiplier (array,anyName){
//     anyName(array)
// }

// function num (array){
//     let newArray = [];
//     for(let number of array) {
//         newArray.push(number *2)
//     }
// }


 // forEach does not have a retu
 // .filter
 // .map
 // .find
 // .reduce
 // .sort

 function x (call){
    call() 
 }

 function y (){
    console.log('printing from fn. y')
 }

 x(y);

let scores = [
    {subject:'maths', score: 70 , day: 'monday'},
    {subject:'chemistry', score: 50, day: 'tuesday'},
    {subject:'chemistry', score: 99, day: 'wednesday'},
    {subject:'french', score: 45, day: 'thursday'},
    {subject:'agric', score: 20, day: 'friday'},
    {subject:'biology', score: 1, day: 'satuday'},
]; 

const ages = [33, 24, 25, 32, 67, 90, 21, 27, 68, 70, 18, 15, 12, 3];


function calculateAges (operation, array) {
    let result ;
    for (let i = 0; i < array.length; i++) {
        let newNo = array[i];

        switch(operation) {
            case 'find-smallest':
            result= result < newNo ? result : newNo;
            break;
            
            case 'find-biggest' :
            result= result > newNo ? result : newNo;
            break;
            
            case 'find-sum':
            result ??= 0
            result += newNo
            break;    
        }
        console.log('result', result)
    }
}

calculateAges('find-biggest', ages)

const combine = ages
    // .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)

console.log(combine);

// function x (callbackFn) {
// //..
// callbackFn();
// callbackFn()
// }

// function y () {
//     console.log('printing from fn. y')
// }

// x(y);

const numbers = [1, 4, 9, 16]

function arrayCal (callbackFn, array) {
    let result;
    for (let i = 0; i < array.length; i++) {
       result= callbackFn(result, array[i]);

        console.log('result', result)
        
        // switch (operation) {
        //     case 'find-smallest':
        //     result = result < currentNo ? result : currentNo;
        //     break;
        //     case 'find-biggest':
        //     result = result > currentNo ? result : currentNo;
        //     break;

        //     case 'sum':
        //     result ??= 0;
        //     result += currentNo;
        //     break;
        // }
    }
     
}

function getSmallest (num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function getBiggest (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function getsum (result, value) {
        result ??= 0;
        return result + value;
}

arrayCal(getsum, numbers);

 

function callPokemon(hello) {
    hello()
    hello()
}

//  callPokemon(pokemon)

function callBackFn(func) {
    func();
    func();
    func();
}

function fight() {
     console.log('one two one two')
}


// function pokemon () {
//     console.log('pikachu')
// }
callBackFn(fight);

function returnSomething() {
    return ()=> '!';
   
}

console.log(returnSomething()())

let result = returnSomething();

console.log(result())

function hello(callBackFunction) {
    // setTimeout(function () {
        console.log('hello world')
    // }, 3000);

    callBackFunction()

    
}

function goodBye() {
    console.log('Goodbye love see you tommorrow')
}

hello(goodBye);

sum(display, 5, 5)
function sum (callback, x, y) {
    // result = callback(x + y);
    result = x + y;
    callback(result)

}


function display(result) {
    console.log(result)
}


let g = 4;
if(g*2 === 8) {
    console.log("correct")
} else {
    "not correct"
}

console.log(g)
// function cBFn (call) {
//     call()
// };

// cBFn(hello);
// smallest, biggest, sum 



// ages.forEach(age =>console.log(age));

// scores.forEach(book => console.log(book.subject));

// const fiftyAndNinty = scores.map(num => num.score === 50)
// .map(nub => nub.score >= 90)
// console.log(fiftyAndNinty)

// const totalScore = scores.reduce((total, score)=> total + score);
// console.log(totalScore)

// let addSum = 0

// for (let i = 0; i < ages.length; i++){
//     addSum += ages[i];
// }

// console.log(addSum)

// const plusSum = ages.reduce((total, age)=> total + age, 0);
// console.log(plusSum);


// const sortSubject = scores.sort((a, b) => a.day > b.day ? 1 : -1)
// console.log(sortSubject)
// const sortAge = ages.sort((a,b)=> b - a)
// console.log(sortAge)

// const squareRoot = ages.map(age => Math.sqrt(age))
// .map(age => age * 2)
// console.log(squareRoot)

// // const passMark = scores.filter(score=> score.score >=50);
// // console.log(passMark)

// const subjectNames = scores.map(name => `${name.subject} [${name.score} - ${name.day}]`)
// console.log(subjectNames)
// // // for loop 
// // for(let i = 0; i < scores.length; i++){
// //     console.log(scores[i])
// // }; 

// // // forEach
// // scores.forEach(function(score) {
// //     console.log(score.day)
// // })

// // //for of

// // for (let score of scores){
// //     console.log(score.subject)
// // }




// //     console.log(scores[i]);
      

// // // for of 
// // for (let result of scores){
// //     console.log(result.score)
// // }


// // // for loop  

// // let alcohol = [];
// // for (let i = 0; i < ages.length; i++) {
// //     if (ages[i] >= 21) {
// //         alcohol.push(ages[i])
// //     }
// // }

// // console.log(alcohol);

// // filter

// // const alcohol = ages.filter(age => age >= 21)
// // console.log(alcohol);

// const frenchScore = scores.find(num => num.subject === 'french')
// console.log(frenchScore)


// // forEach
// // scores.forEach(function(result){
// //  console.log(result.day);
// // })

// // filter 

// // let bear = []
// // for (let i =0 ; i < ages.length; i++){
// //     if (ages[i] >= 21){
// //         bear.push(ages[i]);
// //     }
// // }

// // const bear = ages.filter(age => age >= 21);

// // console.log({bear});

// // const chemistryScores = scores.filter( book=> book.subject === 'chemistry'
// // );

// // console.log({chemistryScores})


// // const fortyAbove = scores.filter((mark)=>(mark.score >=40));
// // console.log(fortyAbove)


// //<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">



















// // let total = scores.reduce((acc,cV)=> acc + cV.score, 0);

// // console.log({total});

// // let avarage = (total /scores.length)
// //  console.log(avarage);

// //  let above = scores.find((score)=>score.score >= 47 )
// //  console.log(above)

// //  let aboveFilter = scores.filter(score=>score.score >= 40 )
// //  console.log(aboveFilter)

// // let aboveMap = scores.map((score)=>score.score >= 47 )
// // console.log(aboveMap)

// // let highestScore = scores[0].score;
// // let topSubject = scores[0].subject;

// // for (let i = 1; i < scores.length; i++) {
// //     if (scores[i].score < highestScore){
// //         highestScore = scores[i].score;
// //         topSubject = scores[i].subject;
// //     }
// // }

// // console.log({highestScore});
// // console.log({topSubject});