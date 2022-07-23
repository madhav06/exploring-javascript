/** 
* Complete the function getUpperCasedValues such that it returns an array containing every property value in the course parameter it receives. 
* Every property value should be in upper case. 
* Check the sample usage to see the expected output.
*/

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const getUpperCasedValues = course => {
    const values = Object.values(course).map(key => key.toUpperCase())
    return values

}

// Sample usage - do not modify
console.log(getUpperCasedValues({name: "Learn JavaScript"})); // ["LEARN JAVASCRIPT"]
console.log(getUpperCasedValues({name: "Learn JavaScript", category: "Programming"})); // ["LEARN JAVASCRIPT", "PROGRAMMING"]
console.log(getUpperCasedValues({})); // []