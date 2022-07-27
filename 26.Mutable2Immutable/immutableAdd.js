/**
 * Common usecase for array immutablity is adding an item
 * to an array. Demontrate this using the " ...syntax"
 */

const grades = [10, 20];
const updated = [...grades, 15];
console.log(updated); // [10, 20, 15] ( new array not related to 'grades)

// spreading items, and adding to it a new value.
