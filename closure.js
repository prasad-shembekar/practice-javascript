//References variable from outer scope to its inner scope
// for this we have to understand lexical scoping
//scope refers to current context of your code globally and locally defined and block scope is introduced in es6

// lexical scope means we can access global variable inside function but opposite is not true we can not use locally defined variables in function outside function

var username = "Hello there!";
function local() {
  console.log(username);
}
local();

// but opposite is not true

function local1() {
  //local scope
  var u1 = "It wont work";
}
// console.log(u1);
local1();

//global scope
function subscribe() {
  var name = "Roadside Coder";
  //inner scope 2
  function displayName() {
    //inner scope
    console.log(name);
  }
  displayName();
}
subscribe();

var use = "Variable"; //parents parent scope
function makeFunc() {
  var name = "Mozilla"; //parent scope
  function displayName(num) {
    console.log(name, num, use);
  }
  return displayName;
}

// var makeFunc = makeFunc();
// makeFunc();

makeFunc()(5);

// newfun()(5);

// closure scope chaining

//global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      //outer scope
      return function (d) {
        //local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); //20

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //shadowing
    console.log(count); //1
  }
  console.log(count); //o
})();

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);
addSix(10); //16
addSix(21); //27

//optimize time
// function find(index){
//     let a = [];
//     for(let i=0; i< 1000000; i++){
//         a[i] = i * i;
//     }
//     console.log(a[index]);
// }

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

// output

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}
a(); // 3 3 3

function b() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}
b(); // 3 3 3

//block scope and setTimeout

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log();
    }, i * 1000);
  }
  inner(i);
}

//use closure for making private counter

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrieve());

var module = (function () {
  function privateMethod() {
    console.log("Private Method");
  }

  return {
    publicMethod: function () {
      console.log("Public Method");
    },
  };
})();

module.publicMethod();
// module.privateMethod();

//Make this function run only once

let v1;
function like() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already subscribed to us");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to ", view);
      called++;
    }
  };
}

let isSubscribed = like();
isSubscribed();
isSubscribed();
isSubscribed();

//Once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = () => console.log("hello");
hello();
hello();
hello();

const hello1 = once(() => console.log("hello1"));
hello1();
hello1();

// Implement Caching/ Memoize function

const clumsysquare = (num1,num2)=>{
    for(let i=1;i<=1000000;i++){
        return num1 * num2;
    }
};
