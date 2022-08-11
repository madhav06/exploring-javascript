/**
 * Write a User class with 2 instance methods:
 * 
 * getFullName: return prefix+ dot + fullname
 * 
 * canVote: return if age is above 18 else false.
 */

// class definition

class User {
    constructor(firstName, lastName, prefix, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
        this.age = age;
    }

    getFullName() {
        return `${this.prefix}. ${this.firstName} ${this.lastName}`;
    }

    canVote() {
        return this.age >= 18;
    }

}


// Sample usage - do not modify
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false