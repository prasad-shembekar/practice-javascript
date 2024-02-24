const user = {
    username: "Prasad",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database...");
        console.log(`Username: ${this.username}`);
    }
}
// this keyword deals with current context
console.log(user.username);
console.log(user.getUserDetails());


