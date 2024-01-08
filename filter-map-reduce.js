const nums = [1, 2, 3, 4];

const multiply = nums.map((num, i, arr) => {
  return num * 3 + i;
});

const moreThanTwo = nums.filter((num) => {
  return num > 2;
});

const sum = nums.reduce((total, val, index, arr) => {
  return val + total;
}, 0);

console.log(sum);
console.log(moreThanTwo);
console.log(multiply);

//Polyfills for map()

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const mul = nums.myMap((val, i, arr) => {
  return val * 3;
});

console.log(mul);

const arr = [1, 2, 3, 4];
const mapResult = arr.map((ar) => {
  return ar + 2;
}); //map return result. as it returns new array we can perform chaining on it

const forEachResult = arr.forEach((ar) => {
  return ar + 2;
}); // whereas forEach do not return any result. forEach and splice modifies original arr.

console.log(mapResult);
console.log(forEachResult);

let students = [
  { name: "Prasad", rollNum: 686, marks: 99 },
  { name: "PS", rollNum: 868, marks: 100 },
];

let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}

const name1 = students.map((stu) => stu.name.toLowerCase());
console.log(name1);
console.log(names);

const details = students.filter((stu) => {
  return stu.marks > 99;
});
console.log(details);

const deta = students.filter((stu) => {
  return stu.marks > 99 && stu.rollNum == 868;
});
console.log(deta);

const sum1 = students.reduce((total, val, i, stu) => {
  console.log(val);
  console.log(i);
  console.log(stu);
  return total + val.marks;
}, 0);
console.log(sum1);

// return only names who scored more than 60

const name = students.filter((stu) => stu.marks > 99).map((stu) => stu.name);

console.log(name);


student with marks greater than 60 after 20m 
have been added to those who score more than 60