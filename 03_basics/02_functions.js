var c = 300; //global scope

if(true){ //block scoped 
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);  //not allowed outside block
// console.log(b); //not allowed outside block 
console.log(c); //it is allowed 

