// Using the yield to return individual elements of an array

function* yieldArrayElements() {
    yield 1;
    yield* [ 20, 30, 40 ];
}

let a = yieldArrayElements();

console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 20, done: false }
console.log(a.next()); // { value: 30, done: false }
console.log(a.next()); // { value: 40, done: false }
