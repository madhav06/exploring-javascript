// Here is an example of using the Symbol.iterator method.

var numbers = [1, 2, 3,4 ,5, 6];

for (let num of numbers) {
    console.log(num);
}

var iterator = numbers[Symbol.iterator]();

var iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // Object {value: 1, done: false}
console.log(iterator.next()); // Object {value: 2, done: false}
console.log(iterator.next()); // Object {value: 3, done: false}
console.log(iterator.next()); // Object {value: undefined, done: true}