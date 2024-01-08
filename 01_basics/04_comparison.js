// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!==1);

// do comparison only with same datatype. as typescript also not allows it
console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null >0); //false
console.log(null == 0); //false
console.log(null >= 0); //true