const coding = ['js','py','java','cpp'];

coding.forEach(function(item){
    console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}

console.log("Provide item function")
coding.forEach(printMe); //only provide function reference


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

