/** 
Complete the function getFullName such that it returns the full name in lower case from the user object when it exists. 
Otherwise, it should return "user".
*/

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
 const getLowerCase = user => {
    return user.info ?. name ?.toLowerCase() ?? "user"

}

// Sample usage - do not modify
console.log(getLowerCase({info: {name: "ALEX"}})); // "alex"
console.log(getLowerCase({info: null})); // "user"
console.log(getLowerCase({})); // "user"