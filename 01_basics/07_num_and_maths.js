const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 23.8966;
console.log(otherNum.toPrecision(3));

const hundreads = 1000000;
console.log(hundreads.toLocaleString('en-IN'));


// -----------------Maths------------------------

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.2)); //4
// console.log(Math.min(4,3,5,6)); //3
// console.log(Math.max(4,3,5,6)); //6

console.log(Math.random()); //always between 0 and 1
console.log(Math.random()*10);
console.log(Math.random()*100);
console.log(Math.random()*1000);

console.log((Math.random()*10) +1); //for avoiding 0.0 case
console.log(Math.floor(Math.random()*10) +1); // for having lower value 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* (max-min +1))+min);



