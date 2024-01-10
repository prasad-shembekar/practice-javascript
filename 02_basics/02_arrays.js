const marvel_heros = ['thor','spider-man','iron-man'];
const dc_heros = ['superman','flash','batman'];

// marvel_heros.push(dc_heros);
console.log(marvel_heros); //[ 'thor', 'spider-man', 'iron-man', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

const all_hero = marvel_heros.concat(dc_heros); 
console.log(all_hero);

const spread = [...marvel_heros,...dc_heros];
console.log(spread);

var str = "Rajesh";
var happy = [...str];
console.log(str.split('').join('-'));
console.log(happy);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real = another_array.flat();
// const real = another_array.flat(Infinity); we can use infinity inside flat
console.log(real);

// data scraping - nodelist , objects or string

console.log(Array.isArray(["Prasad"])); //true
console.log(Array.isArray("Prasad")); //false

console.log(Array.from('Prasad'));

console.log(Array.from({name: "Prasad"})); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));





