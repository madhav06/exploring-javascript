/** 
Update the console.log calls in the getProduct function by using the debugging tip.
Wrap all the values in objects so that you see their output clearer in the console.
To pass the tests, you should log 1 object for both a and b.

Make sure to visualize the output in the console.
**/


/**
 * @param {number} a
 * @param {number} b
 */
 const getProduct = (a, b) => {
    console.log({a, b});
    let product = a * b;
    console.log({product});
    return product;
}

// Sample usage - do not modify
getProduct(2, 3);