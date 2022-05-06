// Sum positive numbers

/*
Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers from the numbers parameter it receives.

*/

/*
This challenge will help you combine some of the knowledge you acquired in this course. Take your time and make as many mistakes as possible!

*/

/**
 * @param {number[]} numbers
 */
 function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    });
    return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2


