// for loop....

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}  */

// for (let i = 0;  i<= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


//  let array = ["flash" ,"batman","superman"]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break
//     }
    
//     console.log(`value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         continue
//     }
    
//     console.log(`value of i is ${index}`);
    
// }

// while loop:-

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index +2
    
// }


// do while loop:-

// let score =11

// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);

// for of:-


//maps

const map = new Map()
map.set('IN',"india")
map.set('usa',"united states of america")
map.set('fr',"france")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' ,value);
    
}

// const myobject={
//     'game1':'nfs',
//     'game2':'sipderman'
// }

// object for in

// const myObject ={
//     js: 'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const program =['js','rb','py','java']

// for (const key in program) {
//    console.log(program[key]);
   
        
//     }

    // for each :---

program.forEach((item,index,arr) => {
    console.log(item,index,arr);
});


const mycoding=[{
    laguagename:"java",
    laguagefilename:"java"
},
{
    laguagename:"python",
    laguagefilename:"python"
},
{
    laguagename:"php",
    laguagefilename:"php"
}
]

mycoding.forEach((item) =>{
    console.log(item.laguagefilename);
    
})

// 

const myNums =[1,2,3,4,5,6,7,8,9]

// const newnums=myNums.filter( (num) =>num >4)
// console.log(newnums);

// const newnum=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })

// console.log(newnum);


const newnums= myNums.map((num)=> num*10).map((num)=> num +1).filter((num)=>num <=40)

console.log(newnums);

// reduce

const array =[1,2,3,4];

// 

const mytotal = array.reduce((acc,curr)=> acc+curr,0)
console.log(mytotal);

// shop cart




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
