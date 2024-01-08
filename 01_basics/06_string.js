const name = "Prasad S";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello My Name is ${name} and My repos are ${repoCount}`);


const gameName = new String("Prasad-Octa");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //not changed original string
console.log(gameName.charAt(2));
console.log(gameName.indexOf('O'));

const newString = gameName.substring(0,4); //sibstring do not take negative value
console.log(newString);

const anotherstr = gameName.slice(-8,4);
console.log(anotherstr); //s

const newString1 = "   Hii ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://prasad.com/prasad%20shembekar";
console.log(url.replace('%20','-'))
console.log(url.includes('prasad'));

const strArr = new String("prasad-madhukar-shembekar");
console.log(strArr.split('-'));

