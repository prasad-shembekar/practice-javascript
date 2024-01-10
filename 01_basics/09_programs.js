// Swap without 3rd var

let x = 10;
let y = 20;

x = x + y; // x = 30
y = x - y; // y = 30 - 20 = 10
x = x - y; // x = 30 - 10 = 20

x = x * y; // x = 10 * 20 = 200
y = x / y; // y = 200 / 20 = 10
x = x / y; // x = 200 / 10 = 20

// greter than number 

let n1 = 10;
let n2 = 20;

if(n1>n2){
    console.log(`${n1} is greter`);
}else{
    console.log(`${n2} is greter`);
}

// Reverse of string / array.

function reverse1(str){
    var rev = "";
for(let i=str.length-1;i>=0;i--){
    rev += str[i].toLowerCase();
    
}   
return rev;
}

let str1 = "Prasad";
let rev2 = str1.split("").reverse().join("");;
console.log(rev2);
console.log(`Original String: ${str1}`);
let rev1 = reverse1(str1);

if (str1===rev1){
    console.log("It is palindrome.");
}else{
    console.log('it is not palindrome');
}
// console.log(`Reversed String is: ${reverse1(str1)}`);



// reverse string 

function reversed(str){
    let rev = "";

    for(i=str.length-1;i>=0;i--){
        rev += str[i];
    }
    return rev;
}

let str = "Hello";
let rev4 = "";
console.log(`Reverse is: ${reversed(str)}`);

let j = str.length - 1;
while(j>=0){
    rev4 += str.substring(j,j+1);
    j--;
}
console.log(rev4)

// reverse array
let arr = [1,2,3,4,5];
console.log(arr.reverse());
