/** 
* Complete the function getFullName such that it returns the name from the user object when it exists. Otherwise, it should return undefined.
* Take a look at the sample usage to understand the structure of the object that this function expects.
*/

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
 const getFullName = user => {
    return user.info?.name;
}

// Sample usage - do not modify
console.log(getFullName({info: {name: "Sam"}})); // "Sam"
console.log(getFullName({info: null})); // undefined
console.log(getFullName({})); // undefined