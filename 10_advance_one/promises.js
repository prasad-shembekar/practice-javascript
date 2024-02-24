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