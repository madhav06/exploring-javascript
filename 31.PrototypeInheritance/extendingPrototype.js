
/**
 * Complete the constructor function User such that it captures
 * the constructor params as the instance variables, and then complete
 * the getFullName(), canVote() methods.
 */

/**
 * Constructor function
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */

function User(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.getFullName = function() {

    return `${this.firstName} ${this.lastName}`;
}

User.prototype.canVote = function() {

    return this.age >= 18;
}

//Sample
const user = new User("Sam", "Green", 43);
console.log(user.getFullName());
// "Sam Green"
console.log(user.canVote());
// true