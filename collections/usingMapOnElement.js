// Iterate over map elements
let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

/* for..of can also be used:

 for (const role of userRoles.entries()) {
     console.log(`${role[0].name}: ${role[1]}`);
 } */