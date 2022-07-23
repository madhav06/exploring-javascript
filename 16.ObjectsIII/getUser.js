/**
Complete the function getUser such that,
it returns an object containing the id and name using the object shorthand notation.
**/

/**
 * @param {number} id
 * @param {string} name
 */
 const getUser = (id, name) => {
    // return {id:id, name:name}; OR
    return {id, name};

}

// Sample usage - do not modify
console.log(getUser(2, "Sam")); // {id: 2, name: "Sam"}
console.log(getUser(5, "Alex")); // {id: 5, name: "Alex"}