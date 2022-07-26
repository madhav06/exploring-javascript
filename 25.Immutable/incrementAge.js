/**
* Complete the function incrementAge such that it adds 1 to the current age from the user parameter it receives.
* Important: notice how the original sampleUser object gets mutated. Look at the result of the last console.log(sampleUser) in the sample usage and see how the object changed (got mutated).
*/

/**
 * @param {Object} user
 * @param {number} user.id
 * @param {number} user.age
 */

const incrementAge = user => {
        return user.age = user.age + 1;

}

// Sample usage - do not modify
const sampleUser = {
    id: 1,
    age: 23
};
incrementAge(sampleUser);
console.log(sampleUser); // notice how that gets mutated