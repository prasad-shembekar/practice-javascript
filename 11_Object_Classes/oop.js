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

    return this;
}

const u1 = User("hitesh",12,true);
const u2 = User("Prasad",22,true);
console.log(u1);






