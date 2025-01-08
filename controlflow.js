//if

// <, >, <=, >=, ==, ===,  !== 

const temperature = 40

// if( temperature === 40){
//     console.log("less than 40");
    
// }else{
//     console.log("temperature is greater than 45");
    
// }

const score= 200

if(score>100){
    let power = "fly"
    console.log(`user power:${power}`);
    
}
// console.log(`user power:${power}`);

// const balance = 1000
// if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less than 500");
    
// }else if(balance<750){
//     console.log("less than 750");
    
// }else if (balance <900) {
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1000");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy courses");
    
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}

// Nullish coalescing operator (??):null,undefined

let val1;
// val1 = 5?? 10
// val1 = null?? 15
// val1 = undefined ?? 15
val1 = null ??10 ?? 20

console.log(val1);

// Terniary operator

// codition ? true : false

const iceteaprice =100
iceteaprice <= 80 ? console.log("less than 80"): console.log("more than 80");




// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;
    

    default:
        console.log("default case match");
        
        break;
}


const userEmail ="g@ganesh.ai"

if (userEmail){
    console.log("got user email");
    
}else{
    console.log("don't have a user email");
    
}

// falsy values
/* false , 0 ,-0, BigInt 0n,"",null,undefined, NaN
// truthy values
"0", "false", ' ', [], {}, function(){}, */

if (userEmail.length === 0){
    console.log("array is empty");
    
}

const emptyObj ={}

if (Object.keys(emptyObj). length ===0){
    console.log("object is empty");
}