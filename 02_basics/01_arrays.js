// array

const myArr = [0,1,2,3,4,5]; // heterogenous and resizable

const myHeros = ["Shaktiman","Nagraj"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0]);

// Array Methods

myArr.push(6);
myArr.push("Value");
myArr.pop();
console.log(myArr);
// myArr.unshift("Add new value");
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join(); //join converts array into string
console.log(newArr);
console.log(myArr);
console.log(typeof newArr);


// slice , splice

console.log("A :",myArr);
const myN1 = myArr.slice(0,3);
console.log("New :", myN1);
console.log("B :", myArr);

const myN2 = myArr.splice(1,3);
console.log(myArr);
console.log(myN2);

