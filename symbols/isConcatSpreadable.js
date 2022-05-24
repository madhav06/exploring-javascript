// Here is an example of using the Symbol.isConcatSpreadable method.

let list = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2,
    [Symbol.isConcatSpreadable]: true
};

let message = ['Learning'].concat(list);

console.log(message); // ["Learning", "JavaScript", "Symbol"]

