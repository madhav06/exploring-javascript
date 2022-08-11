/**
 * Complete the function createPerson such that,
 * it returns a new instance of the class Person with the correct firstName and lastName instance variables
 * based on the fName and lName parameters that it receives.
 */

import Person from "./person";

/**
 * @param {string} fName
 * @param {string} lName
 * 
 */

const createPerson = (fName, lName) => {

    const name = new Person(fName, lName)
    return name;
}

console.log(createPerson("Sam", "Doe"));
console.log(createPerson("Charlie", "Green"));