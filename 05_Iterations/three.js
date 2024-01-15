// for of

["","",""];
[{},{},{}];

const arr = [1,2,3,4,5];

for (const val of arr) {
    console.log(val);
}  

const  greetings = "Hello, World!";
for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    console.log(greet);
}

// Maps

const map = new Map();
map.set('IN',"India");
map.set('USA');
map.set('EU',"Europe");
map.set('IN',"India");
console.log(map);