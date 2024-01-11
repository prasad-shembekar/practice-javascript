// const tinderUser = new Object(); //singleton object 
const tinderUser = {};  // simple object

tinderUser.id = "123";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: '123', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Prasad",
            lastname: "Shembekar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); //optional chaining
console.log(regularUser['fullname']['userfullname']['firstname']);

const obj1 = {1: "a",2:"b"};
const obj2 = {3: "c",3:"d"};

const obj3 = {obj1, obj2};
console.log(obj3);

// const obj4 = {...obj1,...obj2};

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

const users = [
    {
        id:1,
        email: "h@gmail.com",
    },
    {
        id:2,
        email: 'p@gmail.com',
    },
    {
        id:3,
        email: "s@gmail.com",
    },
];

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


