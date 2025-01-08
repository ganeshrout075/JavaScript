const user ={
    username:"ganesh",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai = function (){
//     let username = "ganesh"
//     console.log(this.username);
    
// }
// chai()

// const chai =  ()=>{
//     let username = "ganesh"
//     console.log(this);
    
// }
// chai()

// const addtwo= (num1,num2)=>{
//     return num1+num2
// }

// const addtwo= (num1,num2)=> num1+num2

// const addtwo= (num1,num2)=> (num1+num2)

const addtwo= (num1,num2)=> ({username:"ganesh"})
console.log(addtwo(3,4));

// immediately invoked function expressions (IIFE)


(function chai(){
    // named iife
    console.log(`db connected`);
    })();

( ()=> {
    console.log(`db connected two`);
    
})();

( (name)=> {
    console.log(`db connected two ${name}`);
    
})('ganesh')