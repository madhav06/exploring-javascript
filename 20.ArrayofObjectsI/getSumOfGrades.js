/** 
Complete the getSumOfGrades function such that it returns the sum of all grades.
This should work for any array received as a parameter. 
The array can have 1 or more grade entries in it.
*/

/**
 * @param {Object[]} grades
 * @param {string} grades.date
 * @param {number} grades.grade
 */
 const getSumOfGrades = results => {
    let sum = 0;
    results.forEach(result => {
        console.log(result); // visualize object
        sum += result.grade
    });
    return sum;
};

// Sample usage - do not modify
const results = [{
    date: "2018-12-13",
    grade: 14
}, {
    date: "2018-12-15",
    grade: 18
}]
console.log(getSumOfGrades(results)); // 32