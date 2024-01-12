// var c = 300; //global scope

let a = 10;
console.log(a); //global scope 10
if(true){ //block scoped 
    let a = 100; 
    console.log(a); //local scope 100
    const b = 20;
    var c = 30;
}

// console.log(a);  //not allowed outside block
// console.log(b); //not allowed outside block 
console.log(c); //it is allowed 

