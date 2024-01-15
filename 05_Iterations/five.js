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

const myCoding = [
    {
        langaugeName: 'Javascript',
        languageFileName: 'js',
    },
    {
        langaugeName: 'Java',
        languageFileName: 'java',
    },
    {
        langaugeName: 'python',
        languageFileName: 'py',
    },
]

myCoding.forEach((item)=>{
    console.log(item.langaugeName);
    console.log(item.languageFileName);
})
