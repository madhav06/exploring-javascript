/*
@param {number[]} numbers
*/

/**
 * Complete function such that it returns 
 * the sum of the numbers it receives as a parameter.
 **/

const sumNumbers = numbers => {

   return  numbers.reduce((total, current) => {
        return total + current
    },0)
}

console.log(sumNumbers([2,4,2,10])); // 18
console.log(sumNumbers([10,20, 30])); // 60