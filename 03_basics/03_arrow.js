const user  = {
    username: "Prasad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this); //node me singular console me {} empty object print karega 

function chai(){
    const username = "Prasad";
    // console.log(this); //multiple object properties print karega.
    console.log(this.username); //here it wont work as its not operating on object.
}
chai(); //undefined

const chai1 = function(){
    let username = "Prasad";
    console.log(this.username);
}
chai1(); //undefined

// Arrow function 

const chai2 = ()=>{
    let username = "Prasad";
    console.log(this);
}
chai2();

// () => {} it is simple arrow function 

const addTwo = (num1,num2) => {
    return num1+num2; //when you will wirte inside curly braces we must use return statement 
}
console.log(addTwo(5,6));

// Implicit return arrow function 

// const addThree = (num1,num2) => num1+num2;  implicit return statement 
const addThree = (num1,num2) => (num1+num2); //when we use paranthesis there is no need to use return statement.
console.log(addThree(3,4));

// you can not return object like below it will give you undefined

const addFour = (num1,num2) => {username:"Prasad"};
console.log(addFour(4,5)); //it will show undefined.

// so you should wrap inside paranthesis 
const addFive = (num1,num2) => ({username:"Prasad"});
console.log(addFive(4,5)); //it will show undefined.





