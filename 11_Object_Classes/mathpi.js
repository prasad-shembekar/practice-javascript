const desc = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc)
console.log(Math.PI)
Math.PI = 5

console.log(Math.PI);

const myNew = Object.create(null);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key,value] of Object.entries){ //value of chai is not iterable 
    console.log(`${key} : ${value}`);
}

