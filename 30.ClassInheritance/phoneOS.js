/*
Each mobile phone takes a name and a price and should have 2 methods:

getDescription() which returns a string describing the phone.
getVersion() which is always 12 for android phones and always 15 for iOS phones.
Use inheritance to avoid code duplication.
*/

class Phone {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    getDescription() {
        return `The ${this.name} costs ${this.cost}`;
    }
}


class iOS extends Phone {
    getVersion() {
        return 15
    }
}

class Andriod extends Phone {
    getVersion() {
        return 12
    }
}


// Sample usage - do not modify
const galaxy = new Android("Galaxy", 400);
console.log(galaxy.getDescription()); // "The Galaxy costs 400"
console.log(galaxy.getVersion()); // 12 (always for android phones)
const iphone = new iOS("iPhone", 500);
console.log(iphone.getDescription()); // "The iPhone costs 500"
console.log(iphone.getVersion()); // 15 (always for iOS phones)