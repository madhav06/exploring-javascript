/*
Nested Array Destructuring
*/

var numbers = [8, [1, 2, 3], 10, 12];

var [a, [d, e, f]] = numbers;

console.log(a); // Output: 8
console.log(d); // Output: 1
console.log(e); // Output: 2