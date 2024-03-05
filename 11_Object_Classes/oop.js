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
    this.num = num;
    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++; //this matlab jis so jisne bhi bulaya hai uska kaam krdo
}

// const us1  = createUser("us1",25); //it wont work it do not have new keyword  and will throw cant read properties of undefined ayega
const us2 =  new createUser('us2',250);

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// myArray.prototype.map()

us2.printMe();











