// what is call

var obj = { name: "Piyush " };

function sayHello(age, profession) {
  return "Hello " + this.name + "Age " + age + " Profession " + profession;
}

console.log(sayHello.call(obj, 24, "Software Engineer"));
console.log(sayHello.apply(obj, [24, "Software Engineer"]));

const bindFunc = sayHello.bind(obj);
console.log(bindFunc(24, "Youtuber"));
// call wants direct arguments
// apply wants arguments in form of array.
// bind returns you callable reusable function

// output based

const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 25));

// output based

const age = 10;

var person1 = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person1.getAge.call(person2));
console.log(person1.getAge.bind(person2)());

// output based

var status = "Hii";

setTimeout(() => {
  const status = "Hii1";

  const data = {
    status: "Hii2",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); //Hii2
  console.log(data.getStatus.call(this)); //Hii
}, 0);

// output based

const animal = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animal.length; i++) {
  printAnimals.call(animal[i],i);
}

// append an array to another array

const array  = ["a","b"];
const elements = [0,1,2];

array.push.apply(array,elements);
console.log(array);

// max/min in array.

const number = [5,6,7,2,3];
console.log(Math.max(3,5,2,1));
// console.log(Math.max(number)); does not apply on array.
// but we can use apply to implement it.

console.log(Math.max.apply(null,number));

// bound function 

function f(){
    console.log(this);
}

let user = {
    g: f.bind(null),
};

user.g();

// bind chaining 

function f1(){
    console.log(this.name);
}

f1 = f1.bind({name: "John"}).bind({name:"Ann"}); //bind chaining does not exist
f1();
