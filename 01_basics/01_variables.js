const accountId = 12345;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Amravati";
let accountState;

// accountId = 2; not allowed
accountEmail = "hc@hc.com"; //let can change
accountPassword = "21212"; // var can change
accountCity  = "Pune"; //no keyword can also cahnge

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);
console.log(accountState);
/*
Prefer not to use var 
because of issue in block scope and function scope 
*/