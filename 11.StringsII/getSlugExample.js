//TODO: Complete the function "getSlug".
/**
 * @param {string} text
 */
//TODO: https://example.com/item/Easy assembly dining table becomes --> https://example.com/item/easy-assembly-dining-table.

/*
The slug should not be more than 15 characters. When there are more than 15 characters, 
ignore everything after the 15th character.

The slug should always be in lower case.

Space characters should be replaced by dashes (-).
*/

const getSlug = name => {

    result = result.substring(0,15)

    let result = name.toLowerCase();

    result = result.replaceAll(" ", "-")

    return result
}

console.log(getSlug("IKEA table")); // "ikea-table"
console.log(getSlug("A B C noodles")); // "a-b-c-noodles"