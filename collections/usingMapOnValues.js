// Iterate over map values

let john = {name: 'John Doe'},
lily = {name: 'Lily Bush'},
peter = {name: 'Peter Drucker'};

let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber'],
]);

for (let role of userRoles.values()){
    console.log(role);
}