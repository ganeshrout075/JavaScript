//singleton
const mysym = Symbol("key1")

const jsUser ={
    name: "Ganesh",
    Lname: "Rout",
    "full name" : "Ganesh Rout",
    [mysym]: "mykey1",
    age:25,
    location:"Noida",
    email: "ganeshrout@gmail",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysym]);

jsUser.email = "rout@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "rout@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello jsuser, ${this.name}`);
    
}
// jsUser.greetingTwo = function()
console.log(jsUser.greeting());


// ojbect constructor

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"ganesh",
            lastname:"rout"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

const obj3 =Object.assign({},obj1,obj2)
console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));


const course ={
    coursename:"odia",
    price:"999",
    courseInstructor:"hitesh"

}

const {courseInstructor : instructor} = course
console.log(instructor);


// {
//     "name":"gabber",
//     "course":"gabber is back",
// }