/**
 * Immutably delete a property from an object.
 * It's combination of object destructuring and "... operator" syntax.
 */

const book = {
    id: 1,
    title: "Harry Potter",
    year: 2017,
    rating: 4.5
}

// immutable
const {year, ...rest} = book;
console.log(rest);
 
// {id: 1, title: "Harry Potter", rating: 4.5}