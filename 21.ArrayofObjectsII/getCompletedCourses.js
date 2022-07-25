/** 
Complete the getCompletedCourses function such that it returns the courses (could be 0 or more) that are completed. 
You can tell if a course is completed or not by checking the isCompleted property.
*/

/**
 * @param {Object[]} courses
 * @param {number} courses.id
 * @param {string} courses.name
 * @param {boolean} courses.isCompleted
 */

const getCompletedCourses = courses => {
    return courses.filter(course => course.isCompleted === true);
}



// Sample usage - do not modify
const sampleCourses = [{
    id: 1,
    name: "Learn Programming",
    isCompleted: true
}, {
    id: 2,
    name: "Learn JavaScript",
    isCompleted: false
}];
console.log(getCompletedCourses(sampleCourses));