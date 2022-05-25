// get() trap usage:

const user = {
    firstName: 'John',
    lastName: 'Dow'
}

const handler ={
    get(target, property) {
        return property === 'fullName' ?
        `${target.firstName} ${target.lastName}` : target[property]
    }
};

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.fullName);