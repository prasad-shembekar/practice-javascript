// everything in js is object.

const user = {
  name: "Roadside Coder",
  age: 24,
  "like this video": true,
};

user.name = "Happy Happy";

delete user.age;
console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user["name"]);

// Objects in js

const func = (function (a) {
  delete a; //properties from object will be deleted not local variable
  return a;
})(5); //IIFE

console.log(func);
delete user["like this video"];
console.log(user);
console.log(user["like this video"]);

// dyanamic key value pair to an object

const property = "firstName";
const name = "Prasad Shembekar";

const u1 = {
  property: name,
};
console.log(u1);

const user1 = {
  [property]: name,
  happy: "happy",
  hello: "hello",
};
console.log(user1);

for (key in user1) {
  console.log(key);
}

// output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj); //a will be in the same position but updated value will be given

// multiply all the numeric property by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

console.log("Before call");
console.log(nums);

multiplyNum(nums);

function multiplyNum(obj) {
  for (k in obj) {
    if (typeof obj[k] === "number") {
      obj[k] *= 2;
    }
  }
}
console.log("After call");
console.log(nums);

// Output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; //a["object Object"] = 123;
a[c] = 456; //a["object Object"] = 456;;
console.log(a[b]); // 456

// JSON.stringify and JSON.parse

const user3 = {
  name: "Piyush",
  age: 24,
};

const user4 = JSON.stringify(user3);
console.log(user4);
localStorage.setItem(1, user4); // it will store stringified object
localStorage.setItem(2, user3); // it will store [object Object]

console.log(localStorage.getItem(2));
console.log(JSON.parse(user4));

//Output
console.log([..."lydia"]); //spread operator. (5)['l', 'y', 'd', 'i', 'a']

//oupput

const u5 = { name: "Lydia", age: 22 };
const admin = { admin: true, ...u5 };
console.log(admin);

const settings = {
  username: "Happy",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); //second parameter is for doing specific that property only
console.log(data);

// output
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; //this refers to function
  },
  perimeter: () => 2 * Math.PI * this.radius, //reference to window object
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN

//output (Destructuring in objects)

const { name: myName } = u5;
console.log(myName);

// const s1 = {
//   name: "Prasad",
//   age: 24,
//   fullName: {
//     first: "Prasad",
//     last: "Shembekar",
//   },
// };

// const n = "Roadside Coder";
// const { fullName:{first} } = s1;
// console.log(fullName);

// items
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}
console.log(getItems(["Banana", "Apple"], "pear", "orange"));

// object referencing

let cm = { greeting: "Hey!" };
let d;
d = cm; //here reference is copied so all data can be manipulated
cm.greeting = "Hello";
console.log(d.greeting); //hello

console.log({ a: 1 } == { a: 1 }); //false  both will point to different memory space.
// console.log({a:1} === {a:1}); //false

// output
let person = { name: "Lydia" };
const members = [person];
person = null; // modifying person not properties
// person.name = null; // here now it will change name to null
console.log(members);

// output

const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //20
multiply(); //20
multiply(value); //20 value clone kiya lekin usne modify krdiya as direct value pass kiye to
multiply(value); //40

// shallow copy and deep copy

let user = {
  name: "Roadside Coder",
  age: 24,
};

const objClone = Object.assign({}, user);
objClone.name = "Piyush";
console.log(user, objClone);

const objClone = JSON.parse(JSON.stringify(user));
objClone.name = "Prasad";
console.log(user, objClone);
