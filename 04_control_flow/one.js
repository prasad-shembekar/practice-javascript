// if
const isUserLoggedIn = true;

if(isUserLoggedIn){

}
// <,>,<=,>=,

// = assignment
// == comparison 
// === strict comparision 


if(2==2){
    console.log("It is true");
}

if(false){

}

if(2=='2'){
    console.log("true");
}
if(2==='2'){
    console.log('true')
}else{
    console.log("false");
}

if(2!='2'){
    console.log("true");
}else{
    console.log("false")
}

const temperature = 41;

if(temperature === 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}

const score = 200;
if(score>100){
    const power = "fly";
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); //problem of scope occured 

