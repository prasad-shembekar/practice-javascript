// var c = 300; //global scope

let a = 10;
console.log(a); //global scope 10
if(true){ //block scoped 
    let a = 100; 
    console.log(a); //local scope 100
    const b = 20;
    var c = 30;
}
console.log(a); //it will be 10
// console.log(a);  //not allowed outside block if global not given
// console.log(b); //not allowed outside block 
console.log(c); //it is allowed 

const array = [1,2,3,4];
for(let i=0; i< array.length;i++){
    const element = array[i];
}
// console.log(i); //inaccessible

console.log("Multiple Scope");

// Nested scope

function one(){
    const username = "Prasad";

    function two(){
        const website="Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "Prasad";
    if(username === "Prasad"){
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// *************INTERESTING*******************************

function addone(num){
    return num+1;
}
addone(5); //return hua hai lekin print nahi hua hai 
console.log("Hiii");

const addTwo  = function(num){  //function expression 
    return num + 2;
}
addTwo(5);
console.log("Hiii");

