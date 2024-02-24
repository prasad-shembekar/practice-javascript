const user = {
    username: "Prasad",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database...");
        console.log(`Username: ${this.username}`);
        console.log(this)
    }
}
// this keyword deals with current context
//console.log(user.username);
//console.log(user.getUserDetails());

const promiseOne = new Promise(function(resolve,reject){

})
const date = new Date(); //constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username;   
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const u1 = new User("hitesh",12,true);
const u2 =   User("Prasad",22,true);
console.log(u1.constructor);
console.log("Hii")
console.log(u2);

// new keyword creates new object. calls constructor function 

// arrow function me this ka access nahi hota quki prototype usme aa jata hai

function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5.power);
console.log(multipleBy5.prototype);






