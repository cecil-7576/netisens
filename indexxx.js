console.log("javascript");
let age =true;

const a =   null;
// console.log(a);

// if(false){
//     console.log("true");
    
// }else{
//     console.log("no age");
    
// };
let b = 12

// for (let i = 12; i > 7; i--){
// console.log(i);

// }
const arr = ["kelvin","miracle", "uwana","ubong", "sam", "ebube"];

// for(let items of arr ){
// console.log(items);

// }
const r = Array.isArray(arr)
console.log(r);
function login( name , password){
console.log(`username:${name}`);
console.log(`password:${password}`);
}

let even = [];
let odd = [];

for (let i = 0; i <= 50; i++){
        let result = i
    if (result % 2===0){
        even.push(result)
    }else {
        odd.push(result)
    }
}

console.log(even);
console.log(odd)