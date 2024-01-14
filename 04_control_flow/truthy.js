
// const userEmail = 'prasad@ai.ai';

if(userEmail){
    console.log('Got user email...');
}
else{
    console.log("Don't have user email..")
}

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
