const user = {
    username: "Prasad",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database...");
        console.log(`Username: ${username}`);
    }
}
// this keyword deals with current context
console.log(user.username);
console.log(user.getUserDetails());


