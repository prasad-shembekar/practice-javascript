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

for (let i = 0; i <= 10; i++) {
    console.log("It is val of I: ",i);
    for (let j = 0; j <= 10; j++) {
        console.log("J =", j);
    }
}

