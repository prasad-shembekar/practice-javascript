//function declaration
function square(num) {
  return num*num;
}
// square(5);

//function expression
const fun = function () {
  console.log("Expression");
};
//we assign annomyous function to variable then it is function expression 
fun();

// first class function 

function displaySquare(fn){
    console.log("Square is "+fn(5));
}
displaySquare(square);

//Immediatly Invoked Function Expression 

(function square(num){
    console.log(num*num);
})(10);

(function(x){
    return (function(y){
        console.log(x);
    })(2);
})(1);

// ability to access function variable 
// which are out of its lexical scope


for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

functionName();

function functionName(){
    console.log("It is function declaration")
}

var f = 21;
var func = function(){ //params
    console.log(f);
    var f = 20;
};

func(); //args

function mul(...nums){ //rest
    console.log(nums[0]*nums[1]);
}

var arr = [5,2];
mul(...arr); //spread


const fn = (a,x,y,...numbers) =>{
    console.log(x,y);
}

fn(5,6,3,7,8,9);
console.log("Hii")

//callback function 
//event listener, map,filter,reduce,setTimeout

const add = function(f1,f2){
    return f1 + f2;
};

add(5,6)

// arrow function and normal function 

//syntax
console.log("It is function")
function add1(no1,no2){
    console.log(no1+no2);
}
add1(1,2);

const add2 = function(no3,no4){
    console.log(no3+no4);
}
add2(3,4);

const add3 = (no5,no6)=>{
    console.log(no5+no6);
}
add3(5,6);

//implicit return keyword

const square1 = (num1) => num1*num1;
console.log(square1(5));

function fn1(){
    console.log(arguments); //arguments allowed in function defination 
}

fn1(1,3,4,5,5,6,6,8);

const fnArr = ()=>{
    console.log(arguments); // arguments not allowed in arrow funct.
}
fnArr(1,2,3,4,5)

// "this" keyword
let user = {
    username: "Roadside coder",
    rc1: ()=>{
        console.log("Subscribe to"+ this.username);
    },
    rc2(){
        console.log("Subscribe to "+ this.username);
    },
};

user.rc1(); // undefined
user.rc2(); // Roadside coder