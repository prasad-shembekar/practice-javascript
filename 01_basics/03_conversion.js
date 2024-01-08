// let score = "33abc";
// let score = null; //to number is 0
// let score = undefined; // NaN
let score = true;

// console.log(typeof score);
// console.log(typeof(score));

let new_score = Number(score);
// console.log(typeof new_score);
// console.log(new_score);

// "33" => 33
// "33abc" = > NaN
// true => 1; false => 0;
// typeof NaN => number


// let isLoggedIn = 1;
// let isLoggedIn = ""; //false
// let isLoggedIn = "Prasad"; //true
let isLoggedIn = " "; //true

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//  1 => true; 0=> false
//  "" => false; " " => true
// "Prasad" => NaN

let someNumber = 33;
let strNumber = String(someNumber);
// console.log(typeof strNumber);


// ********** Operations *****************

let value  = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2+2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1  = "hello";
let str2 = " prasad";
let str3 = str1 + str2;
console.log(str3);

//left to right assignment
console.log("1" + 2); //12
console.log(1 + 5 + "2"); //62
console.log("1" + "2");
console.log("1"+2+2);
console.log(2+2 + "1"+2); //412

console.log(+true); //1
console.log(+""); //0

let num1,num2,num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
// gameCounter++; //101
++gameCounter; //101
console.log(gameCounter);

