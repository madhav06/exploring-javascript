/**
 * Immutably update an array and immutably remove an item
 * using .map() and .filter() methods. 
 */

const grades = [10, 20, 15];
const updated = grades.filter(grade => grade !=== 20);

console.log(updated); // [10, 15]

// .filter() method returns a new array, excluding the "grade" value 20.

