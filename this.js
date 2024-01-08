// Implicit Binding calling function using . dot notation
// Explicit Binding when function called using call bind and apply.

this.a = 5;
console.log(this.a); //global object
console.log(this); //WIndow Object

function getParam() {
  console.log(this.a);
}

getParam();

const getArrowParam = () => {
  console.log(this.a);
};
getArrowParam();

// using object
let user = {
  name: "Piyush",
  age: 24,
  childObj: {
    newName: "Roadside Coder",
    getDetails() {
      console.log(this.newName, "and", this.name); //normal function this points to immediate parent
    },
    getArrow: () => {
      console.log(this); //wont point to immediate parent but the global window obj.
    },
  },
};

user.childObj.getDetails();
user.childObj.getArrow();

class cl {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const u1 = new cl("Prasad");
console.log(u1);
u1.getName();

// Output

const u2 = {
  firstName: "Piyush!",
  getName() {
    const firstName = "Piyush  Agrawal";
    return this.firstName; //in normal function this always points to immediate parent property
  },
};

console.log(u2.getName());

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let u3 = makeUser();
console.log("Jk");
console.log(u3.ref().name);

const u4 = {
  name: "Prasad S",
  longMessage() {
    console.log(this.name);
  },
};
setTimeout(function () {
  u4.longMessage();
}, 1000); //due to callback it wont print immeditate parent will print undefined we can avoid this callback

const happy = {
  name: "Piyush",
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}`;
  },
};

console.log(happy.greet());
console.log(happy.farewell());

var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback);

// add cascading of function logic 


const calc = {
    total: 0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    substract(a){
        this.total -= a;
        return this;
    },
};

const result = calc.add(10).multiply(5).substract(30);
console.log(result.total);