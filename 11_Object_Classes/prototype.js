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
    console.log(``)
}