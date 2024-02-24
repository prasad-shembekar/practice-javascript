// Promise is a Object represents eventual completion or failure
// Kernal ko request ke Baad file milegi
// Generally we consume promises 

// fetch('www.something.com').then().catch(),finally();
//  Q or BlueBird were commonly used when we dont had promise object in javascript

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, Cryptography, Networking call

    setTimeout(function(){
        resolve();
        console.log('Async Task is completed'); //pahle task complete hoga badme promise chalega 
    },1000);
});

promiseOne.then(function(){
    console.log("Promise Consumed...");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log("Async task 2");
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"prasads",email:"prasads@gmail.com"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user);
},1000)

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "prasad",password:"123"});
        }else{
            reject("ERROR: Something went wrong");
        }
    },1000)
})

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// console.log(username); we can not get values returned by promise directly 

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(()=> console.log("Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript",password:"123"});
        }else{
            reject("ERROR: JS went wrong");
        }
    },1000)
})

async function consumePromise(){
        try{
            const response = await promiseFive;
        console.log(response);
        }catch(error){
            console.log(error);
        }
}

consumePromise();

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = response.json();
    console.log(data);
    }catch(err){
        console.log(err);
    }
}

getAllUsers();
