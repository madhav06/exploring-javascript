/*
@param {Object} course
@param {number} [course.id]
@param {string} [course.name]
@param {number} [course.year]
*/

/***
 * function getUpperCaseProperties return an array containing
 * properties every property in the course parameter it receives.
 * Every key should be in uppercase.
 * 
*/

const getUpperCaseProperties = course => {
    return Object.keys(course).map( key => key.toUpperCase() );
}

// Sample usage - do not modify
console.log(getUpperCasedProperties({id: 1, name: "Learn JavaScript", year: 2021})); 
// ["ID", "NAME", "YEAR"]
console.log(getUpperCasedProperties({name: "Learn JavaScript", category: "Programming"})); 
// ["NAME", "CATEGORY"]
console.log(getUpperCasedProperties({})); 
// []