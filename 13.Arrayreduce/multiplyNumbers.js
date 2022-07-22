/*
@param {number[]} numbers
*/

/**
 * Complete function such that it multiplies every number,
 * from the "numbers" it receives as a parameter.
 **/

const multiplyNumbers = numbers => {
    return numbers.reduce((total, current) => {
        return total * current
    }, 1)
}

console.log(multiplyNumbers([2,4,2,10])); // 160

console.log(multiplyNumbers([10,20,30])); // 600