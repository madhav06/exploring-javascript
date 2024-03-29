/*
function getCountProperties such that it returns the number of keys in the object course it receives. 
Check the sample usage to see the expected output
*/

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 * @param {number} [course.category]
 */

const getCountProperties = course => {
    return Object.keys(course).length;
}

// Sample usage - do not modify
console.log(getCountProperties({id: 1, name: "Learn JavaScript", year: 2021, category: "Programming"}));
 // 4
console.log(getCountProperties({name: "Learn JavaScript", category: "Programming"})); 
// 2
console.log(getCountProperties({})); 
// 0