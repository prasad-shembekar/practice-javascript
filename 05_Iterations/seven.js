const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.map((num)=> num+10);
console.log(newNums);

const happy = [];
newNums.forEach((item)=>{ happy.push(item+10)});
console.log(happy);

// chaining method
const myNumbers1 = [1,2,3,4,5,6,7,8,9,10];
const happy1 = myNumbers1
                .map((num)=>num*10) //10,20,30,40,50,
                .map((num)=>num +1); //11,21,31,41,51
console.log(happy1);





