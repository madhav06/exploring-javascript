// Reflect.construct() usage:

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
};

let args = ['John', 'Doe'];

let john = Reflect.construct(
    Person, args
);

console.log(john instanceof Person);
console.log(john.fullName);