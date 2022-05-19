/*
In the following example, the yield keyword is an expression that evaluates to the argument passed to the next() method:
*/

function* generate() {
    let result = yield;
    console.log(`result is ${result}`);
}

let g = generate();
console.log(g.next()); 

console.log(g.next(1000));
