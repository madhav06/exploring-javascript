/**
 * Use Instance methods (function) on instance of class
 * and complete this program.
 */

//CLass definition

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} {this.lastName}`;
    }
}

// class usage

const person = new Person("Sam", "Green");
console.log(person.getFullName()); // "Sam Green"