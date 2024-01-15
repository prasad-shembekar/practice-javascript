const myNums = [1,2,3];

const myTotal = myNums.reduce(function(acc,curVal){
    console.log("Accumulator: "+acc);
    return acc + curVal;
},0);
console.log(myTotal);

