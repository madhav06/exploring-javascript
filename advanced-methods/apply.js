// The apply() method allows an object to borrow the method of another object without duplicating the code.

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};


const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let result = computer.turnOn.apply(server);

console.log(result);

