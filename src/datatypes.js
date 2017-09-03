"use strict";

console.log('"1"==1: ' + ("1"==1)); // true
console.log('"1"===1: ' + ("1"===1)); // false
console.log('1===1: ' + (1===1)); // true
let zahl = 1;
console.log(zahl===1); // true
zahl = 1.4;
console.log(zahl===1); // false
zahl = 1.0;
console.log(zahl===1); // true

console.log(typeof 64); // number
console.log(typeof "64"); // string
console.log(typeof "12.5"); // string
console.log(typeof 12.5); // number

const EINS = 1;
console.log(typeof EINS); // number


console.log(typeof ("2"*"2")); // number

console.log("2" + "2"); // 22
console.log(Number ("2") + Number("2")); // 4
