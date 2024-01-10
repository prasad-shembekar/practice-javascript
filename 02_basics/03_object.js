console.log("Happy");

// Object literals Constructor (Singleton yane only one object) if not then multiple instances banane padege 
// When we define using object literals singleton nahi banega 

const mySym = Symbol('key1');

const JsUser = {
    name: "Prasad",
    "full name": "Prasad Shembekar",
    [mySym] : "My Key 1",
    age: 24,
    location: 'Jaipur',
    email: 'pshembekar@deloitte.com',
    isLoggedIn: false,
    lastLoginDays: ['Mon','Fri'],
}

console.log(JsUser.email);
console.log(JsUser["email"]);

// we can not access full name using dot . operator now
console.log(JsUser["full name"]);

// using symbol as property of object
console.log(typeof JsUser.mySym); //string
console.log(JsUser[mySym]);

JsUser.email = 'prasad@bloomberg.com';
JsUser.city = "London,UK";
console.log(JsUser);
// Object.freeze(JsUser); // it will not allow to edit
JsUser.email = 'prasad@microsoft.com';
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello user!`)
}

JsUser.greeting1 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greeting); //it will show function reference
console.log(JsUser.greeting()); //it will execute function 
console.log(JsUser.greeting1());



