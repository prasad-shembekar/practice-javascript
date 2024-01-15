const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,curVal){
//     console.log("Accumulator: "+acc);
//     return acc + curVal;
// },0);
// console.log(myTotal);

const myTotal = myNums.reduce((acc,curVal)=> acc + curVal,0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'mobile course',
        price: 2999
    },
    {
        itemName: 'Data science course',
        price: 15999
    },
]

console.log(shoppingCart);

const pricepay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(pricepay);