
// const userEmail = 'prasad@ai.ai';

// if(userEmail){
//     console.log('Got user email...');
// }
// else{
//     console.log("Don't have user email..")
// }

// falsy values which assumes fals val
// false, 0, -0, BigInt 0n, "", null,undefined,NaN

// truthy values -> "0", 'false', ' ', " ", [], {}, function(){}
// empty function also truthy val


const userEmail = []; //checking whether array is empty or not 
if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}; //checking whether object is empty or not.
if(Object.keys(emptyObj).length === 0){
    console.log("It is empty object");
}

// it will ouput as true
// false == 0
// false == ''
// 0 == ''

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; //it will give you 5
val1 = null ?? 10; // it will give 10 if null
// any complex db function can be written instead of 10



console.log(val1);
