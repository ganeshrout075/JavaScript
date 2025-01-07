let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//  let myCreatedate = new Date(2024, 0 ,7)
let myCreatedate = new Date("01-14-2024")
console.log(myCreatedate.getTime());

console.log(myCreatedate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone: ""
})

