/**
 * Create a copy of objects, instead of changing the original one.
 * use "... operator" to clone an object.
 */

const user = {
    id: 1,
    age: 23
};

const cloned = {...user}
console.log(cloned);

// {id: 1, age: 23} new object not related to 'user'