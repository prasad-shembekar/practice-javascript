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
    console.log(num1+num2);
    console.log("Hello there!");
}
addTwo(5,6);

// Implicit return arrow function 

const addThree = (num1,num2) => num1+num2;
console.log(addThree(3,4));


