// Using the apply() method to append an array to another

// The apply() method allows you to append elements of an array to another:

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr); 

