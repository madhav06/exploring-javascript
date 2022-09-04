
/*Callback pattern with data
Update the calculateSum function such that the console.log("The sum is: X") runs after the sumGrades function has finished executing. Also, replace X with the actual sum of the grades.
Note that the sumGrades function accepts a success callback as its second parameter which receives the sum of the grades as a parameter.
*/

import {sumGrades} from "./helpers.js";

/**
 * @param {number[]} grades
 */
const calculateSum = (grades, callback) => {
    sumGrades((grades) => {
        console.log("The sum is: X", grades) ;
    });
    
}

// Sample usage - do not modify
calculateSum([18, 10]);
calculateSum([15, 10, 20]);