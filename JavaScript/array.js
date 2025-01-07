const myArr= [1,2,3,4,5,6,true]
const myHero =["batman","ironman","captain-america"]

const myArr2 = new Array(1,2,3,4) 
console.log(myArr[2]);
// console.log(myHero[2]);


// array methods

myArr.push(7)
myArr.pop()
console.log(myArr);


myArr.unshift(0)
myArr.shift()
console.log(myArr);


//slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2 );


const marvel_hero =['ironman','thor','hulk']
const dc_hero =['batman','superman']

const all_new_heroes = [...marvel_hero,...dc_hero]
console.log(all_new_heroes);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ganesh"));
console.log(Array.from("Ganesh"));

let score1=100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));
