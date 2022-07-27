/**
 * Create your first Immutable array (shallow copy of array)
 * shallow copy : creating a copy of old array as a new array
 * .filter(), .map(), .reduce() methods are immutable.
 */

const grades = [10, 20];
const gradesCopy = [...grades]; // gradesCopy : new array

console.log(gradesCopy) // [10, 20]
// (new array, not linked to 'grades')
