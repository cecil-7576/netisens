// function formatNAme(func, firstName,lastName){
//     func(firstName, lastName);
// }



// function printFullName (firstName,lastName){
//     console.log(`My fullname is ${firstName} ${lastName}`)
// }

// formatNAme(printFullName, "Moses", "Bliss");

// function multiplier (array,anyName){
//     anyName(array)
// }

// function num (array){
//     let newArray = [];
//     for(let number of array) {
//         newArray.push(number *2)
//     }
// }


// // forEach does not have a retu
// // .filter
// // .map
// // .find
// // .reduce

let scores = [
    {subject:'maths', score: 70 , day: 'monday'},
    {subject:'chemistry', score: 50, day: 'tuesday'},
    {subject:'chemistry', score: 99, day: 'wednesday'},
    {subject:'french', score: 45, day: 'thursday'},
    {subject:'agric', score: 20, day: 'friday'},
    {subject:'biology', score: 1, day: 'satuday'},
]; 

const ages = [33,24,25,32,67,90,21,27,68,70,1,18,15,12,3,];

// for loop 

// for (let i =0 ; i < scores.length; i++){
//     console.log(scores[i]);
// }

// // for of 
// for (let result of scores){
//     console.log(result.score)
// }
 

// forEach
// scores.forEach(function(result){
//  console.log(result.day);
// })

// filter 

// let bear = []
// for (let i =0 ; i < ages.length; i++){
//     if (ages[i] >= 21){
//         bear.push(ages[i]);
//     }
// }

// const bear = ages.filter(age => age >= 21);

// console.log({bear});

const chemistryScores = scores.filter( book=> book.subject === 'chemistry'
);

console.log({chemistryScores})


const fortyAbove = scores.filter((mark)=>(mark.score >=40));
console.log(fortyAbove)






















// let total = scores.reduce((acc,cV)=> acc + cV.score, 0);

// console.log({total});

// let avarage = (total /scores.length)
//  console.log(avarage);

 let above = scores.find((score)=>score.score >= 47 )
 console.log(above)

 let aboveFilter = scores.filter((score)=>score.score >= 40 )
 console.log(aboveFilter)

// let aboveMap = scores.map((score)=>score.score >= 47 )
// console.log(aboveMap)

// let highestScore = scores[0].score;
// let topSubject = scores[0].subject;

// for (let i = 1; i < scores.length; i++) {
//     if (scores[i].score < highestScore){
//         highestScore = scores[i].score;
//         topSubject = scores[i].subject;
//     }
// }

// console.log({highestScore});
// console.log({topSubject});