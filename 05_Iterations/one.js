// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(i);
}
// console.log(index); due to block scope we can not access it 
// first index gets initialised then we compare its value if true then code gets executed then index increament done again value checked then code executes

for (let i = 1; i <= 10; i++) {
    console.log(`It is table of ${i}:`);
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' +i*j);
    }
}

let myArr = ["flash",'superman','batman'];
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        // break;
        continue;
    }
    console.log(`Value of i is ${index}`);
}
// continue - ek baar maaf kro do 



