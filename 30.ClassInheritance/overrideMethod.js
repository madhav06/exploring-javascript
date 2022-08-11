/**
 * override getFullName() by returning (manager)
 * after the full name.
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

    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }

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