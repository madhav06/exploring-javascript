// Iterate over map keys

let john = {
    name: 'John Doe'
},
lily = {
    name: 'Lily Bush'
},
peter = {
    name: 'Peter Drucker'
};

let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

for (const user of userRoles.keys()) {
    console.log(user.name);
}