/*
Swapping values of 2 variables 
using destructuring assignment.
*/

let guest = "Jane";
let admin = "Pete";

// Lets swap

[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane

// Successfully swapped!