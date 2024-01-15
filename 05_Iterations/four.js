const myObj1 = {
    js: 'Javascript',
    cpp : 'C++',
    rp: 'Ruby',
    swift: 'Swift',
}

for (const key in myObj1) {
    console.log(myObj1[key]);
}

const lang = ['js','rb','py','cpp'];

for (const key in lang) {
    console.log(key);
    console.log(lang[key]);
}

const map = new Map();
map.set('IN',"India");
map.set('USA');
map.set('EU',"Europe");
map.set('IN',"India");
// console.log(map);

for (const key in map) {
    console.log(key);
}
