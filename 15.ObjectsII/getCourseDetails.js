/*
function getCourseDetail such that it returns the following string:

The course X is Y

Where X is replaced with the detail parameter and
Y replaced with the value from the course parameter where the property is detail.

*/

/**
 * @param {Object} course
 * @param {number} course.id
 * @param {string} course.name
 * @param {number} course.year
 * @param {string} detail
 */


const getCourseDetail = (course, details) => {
    const keys = Object.keys(course);
    console.log(keys);
    return `The course ${details} is ${course[detail]}`;
}


// Sample usage - do not modify
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "name")); // "The course name is Learn JavaScript"
console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2021}, "year")); // "The course year is 2021"