console.log(null>0);
console.log(null==0);
console.log(null<=0);


console.log(undefined ==0);
console.log(undefined > 0);
console.log(undefined < 0);


// stack(primitive), Heap(non-primitive)

let myYoutubename ="ganeshroutdotcom"

let anothername =myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "routg212.com",
    adress:"noida",
    phno: ""
}

let userTwo = userOne

userTwo.phno = "7676470936"

console.log(userOne);
console.log(userOne.phno);
console.log(userTwo);
console.log(userTwo.phno);



