/*
@param {lat} array
@param {lng} array

concatination merges several arrays into,
new array using ... spread syntax.
*/

const lat = [5.234];
const lng = [1.412];

const point = [...lat, ...lng];

console.log(point);  // [5.234, 1.412]

// The new arrya contains element of both arrays.

