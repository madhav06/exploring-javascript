/*
incrementAge such that it returns the person object
witht he age incremented (add 1 to the existing value).

code should not be hardcoded.

@param {Object} person
@param {string} person.firstName
@param {string} person.lastName
@param {number} person.age

*/

function incrementAge(person) {
    person.age = person.age + 1
}

const person = {
    firstName: "Jennifer",
    lastName: "Doe",
    age: 18
}

console.log(incrementAge(person));

