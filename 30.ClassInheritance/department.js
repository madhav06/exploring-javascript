/**
 * Implement Inheritance in a department,
 * Manager inherits from Employee. 
 * Which means that Manager will get all the methods defined on Employee. 
 * Here's how you write it, using the extends keyword:
 * 
 */

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Manager extends Employee {

    sendPerformanceReview() {
        console.log(`Sent review for current quarter `);
    }
}

const manager = new Manager("Sam", "Green");
manager.sendPerformanceReview();
//Sent performance review for current quarter.

manager.getFullName();
// Sam Green
manager.getInitials();
// SG