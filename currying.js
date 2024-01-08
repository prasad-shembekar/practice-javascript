// currying in js f(a,b) into f(a)(b)

// function f(a,b){
//     console.log(a,b);
// }

function f(a) {
  return function (b) {
    console.log(a, b);
  };
}
console.log(f(5)());

function f1(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return `${a} ${b} ${c} ${d}`;
      };
    };
  };
}

console.log(f1);
console.log(f1(5)(6)(8)());

//higher Order function
// makes function pure as it is less exposed to errors
// avoids calling same variable again and again
// converting it into sum(1,2,3) to sum(1)(2)(3)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid operation";
    };
  };
}
console.log(evaluate("multiply")(4)(2));

const mul = evaluate("multiply");
console.log(mul(3)(5));
console.log(mul(4)(2));

// Infinite Currying -> sum(1)(2)(3).....(n)
// nth number of currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(2)(3)(4));

// sum(1)(2);
// sum(1)(2)(3)(4);

// Currying and Partial Application

function sum1(a) {
  return function (b, c) {
    //partial application for this function not currying
    return a + b + c;
  };
}

// function sum1(a) {
//   return function (b) {
//     //this is the currying
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

const x = sum1(10);
console.log(x(5, 6));
console.log(x(3, 2));

// console.log(sum(20)(1,4));

// Manipulate DOM

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");
updateHeader("Happy, Happy!");

// curry() implementation f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (func.length >= args.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum4 = (a, b, c) => a + b + c;
const totalSum = curry(sum4);
console.log(totalSum(1)(2)(3));
