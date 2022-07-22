/*
Destructure an array more than once.
*/

var places = ["first", "second", "third", "fourth"];

var [a, b, , d]  = [f,  ...rest] = places;

console.log(a); // Output: first
console.log(d); // Output: fourth
console.log(f); // Output: first
console.log(rest); // Output: ["second", "third", "fourth"]