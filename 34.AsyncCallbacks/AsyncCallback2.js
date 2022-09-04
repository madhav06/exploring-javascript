/*This is a visualization challenge. Can you guess the output before running the code?*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 2000);

console.log("D");

/* 
A 
D
B
C
*/