// Primitive 7 Category
// nnbbssu
String 
Number
Boolean
null 
undefined
BigInt
Symbol


const score = 100;
const scoreVal = 100.3;
const isLoggedIn = false;
const outsideTemp = null;

let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log("It is happy!");
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 1234556668888888n;
console.log(typeof bigNumber); //bigInt

// Reference Type Non-primitive ka type hamesha object hi hoga aur function ka object function hoga
Array
Object
Function


const heros = ["Shaktiman","Naagraj","Doga"];
console.log(heros);

let obj = {
    name:"Prasad",
    age:33,
}

const func = function(){
console.log("Namaste World!");
}

console.log(typeof bigNumber);
console.log(typeof func);


// **************************
// Stack(Primitive) and Heap Memory(Non-Primitive)
//  Copy Milegi           Reference Milega 

let ytName = "Prasad Vlogs";
let anotherName = ytName;
anotherName = "Code with Prasad";

console.log(ytName);
console.log(anotherName);

let user = {
    email: "User@google.com",
    upi:"user@ybl"
}

let user2 = user;
user2.email="raj@bing.com"
user2.upi="raj@gpay"

console.log(user);
console.log(user2);

