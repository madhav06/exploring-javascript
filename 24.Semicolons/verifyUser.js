/**
* A user is verifying their email on your website. 
* We've got an array of users, and the id of the user that's verifying their email. 
* Set the isVerified field to true for that user.
* Notice how the original array gets mutated!
*/

/**
* @param {array} users
* @param {number} userId
*/

const verifyUser = (users, userId) => {
    const user = users.find(user => user.id === userId);
    user.isVerified = true;
}

// Sample usage - do not modify
const users = [{
    id: 1,
    name: "Sam",
    isVerified: false
}, {
    id: 2,
    name: "Alex",
    isVerified: false
}, {
    id: 3,
    name: "Charlie",
    isVerified: false
}];
verifyUser(users, 2);
console.log(users); // notice that it gets mutated

