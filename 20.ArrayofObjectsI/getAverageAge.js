/** 
Complete the getAverageAge function such that it returns the average age from the users parameter.
*/

/**
 * @param {Object[]} users
 * @param {string} users.joined_on
 * @param {number} users.age
 */
 const getAverageAge = users => {
    let total = 0;
    users.forEach(user => total += user.age);
    return total / users.length;
};

// Sample usage - do not modify
const users = [{
    joined_on: "2018-12-13",
    age: 14
}, {
    joined_on: "2018-12-15",
    age: 18
}];
console.log(getAverageAge(users)); // 16