/*
@param {grades} array

use case of reduce or Array reduce
*/

const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => {

    return total + current
}, 0);

/** 
 * We call .reduce() method on grades array
 * We assign the result of grades.reduce() to a new variable called sum
 * The reduce method is taking 2 parameters (reducer, initialValue)
 * 
 * In this example,
 * reducer is:
 * (total, current) => {
 *     return total + current
 * }
*/

