function happy(){ //simple function declaration 
    console.log("Happy");
    console.log("Hello");
    console.log('Hii');
}

console.log(happy); //function reference
console.log(happy()); //function calling 

function add(n1,n2){  //getting parameters
    console.log(n1+n2);
}
console.log(add()); //NaN whats inside n1 and n2 we dont know 
console.log(add(5,6)); //11

//passing argument 
console.log(add(3,"4")); //34
console.log(add(3,"a")); //3a
console.log(add(3,null)); //3

function add1(n3,n4){
    console.log(n3+n4);
}
const result = add1(3,5); //returns undefined so 
console.log("Result", result); //here result contains undefined

function add2(n5,n6){
    // const result = n5+n6;
    // return result;

    return n5+n6;
    console.log("Prasad"); //this will not execute as written after return statement
}
const result1 = add2(3,5);
console.log("Result1: ",result1); //function returning value

function loginUserMsg(username){
    return `${username} just logged in...`;
}

console.log(loginUserMsg("Prasad"));














