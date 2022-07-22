/**
 * @param {string[]} user
 * compute full name such that user full name is firstName + lastName
 * seperated by space.
 */
 const getFullName = user => {
    const [firstName, lastName] = user;
    return `${firstName} ${lastName}`;
}

// Sample usage - do not modify
console.log(getFullName(["Sam", "Blue"])); // "Sam Blue"
console.log(getFullName(["Alex", "Green"])); // "Alex Green"