/**
 * Demonstrate using "... operator" syntax,
 * make a copy and then add the new key: value that will override
 * the previous one.
 */

const user = {
    id: 1,
    age: 23
};

const clonedUser = {
    ...user,
    age: user.age + 1
};

console.log(clonedUser);

// {id: 1, age: 24} (new object not related to 'user' )
// We override age: user.age + 1 the previous value of the age property.

