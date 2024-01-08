// let score = "33abc";
// let score = null; //to number is 0
// let score = undefined; // NaN
let score = true;

console.log(typeof score);
console.log(typeof(score));

let new_score = Number(score);
console.log(typeof new_score);
console.log(new_score);

// "33" => 33
// "33abc" = > NaN
// true => 1; false => 0;
// typeof NaN => number


// let isLoggedIn = 1;
// let isLoggedIn = ""; //false
// let isLoggedIn = "Prasad"; //true
let isLoggedIn = " "; //true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//  1 => true; 0=> false
//  "" => false; " " => true
// "Prasad" => NaN

let someNumber = 33;
let strNumber = String(someNumber);
console.log(typeof strNumber);