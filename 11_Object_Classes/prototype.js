// let myName = "Prasad"
// let myChannel = "   chai   ";
// console.log(myName.length)
// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros  = ['thor','spiderman']
let heroPower = {
    thor: "hammer",
    spiderman: "spider web",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}



Object.prototype.prasad = function(){
    console.log("prasad is present in all objects ")
}
heroPower.prasad();
myHeros.prasad();

Array.prototype.heyPrasad = function(){
    console.log(`Prasad says hello`)
}
myHeros.heyPrasad();
// heroPower.heyPrasad(); do not have access 


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

const User = {
    name: "User 1",
    email: "username@email.com"
}


Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Chai with code"
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength();
"Prasad".trueLength();
"Hi".trueLength();