//TODO: Complete the function "getCountTodos" 
/**
 * @param {string} text
 */

//TODO: such that it returns the number of todos in the CSV string it receives.

const getCountTodos = todos => {

    return todos.split(",").length;
}

console.log(getCountTodos("Laundry, Wash dishes, Clean table"));

console.log(getCountTodos("Feed cat, Degrease bike chain"));