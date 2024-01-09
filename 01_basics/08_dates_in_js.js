// 1 Jan 1970
// Js will use temporal api in future 

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString);

console.log(typeof myDate); //object

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toLocaleDateString()); // mm/dd/yyyy

let myCreatedDate1 = new Date(2023,0,23,5,3);
console.log(myCreatedDate1.toLocaleString()); // mm/dd/yyyy

let myCreated = new Date("2023-01-14");
console.log(myCreated.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp); //milisecond from 1 jan 1970
console.log(myCreated.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



