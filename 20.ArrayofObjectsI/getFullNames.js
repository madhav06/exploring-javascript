/** 
Complete the getFullNames function such that it returns an array containing the first name and last name of every user, separated by a space character. 
Those full names should be in upper case.
*/


/**
 * @param {Object[]} users
 */
 const getFullNames = users => {
    return users.map(user => {
        return `${user.firstName} ${user.lastName}`.toUpperCase();
    });
}

// Sample usage - do not modify
const users = [{
    id: 1,
    firstName: "Sam",
    lastName: "Green"
}, {
    id: 2,
    firstName: "Alex",
    lastName: "Blue"
}];
console.log(getFullNames(users)); // ["SAM GREEN", "ALEX BLUE"]