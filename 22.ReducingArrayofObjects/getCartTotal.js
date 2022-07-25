/** 
Complete the getCartTotal function such that it returns the total value of the cart. This can be calculated by multiplying the price by the quantity and returning its sum.

For example, assuming the sampleProducts array provided, here's how you calculate the cart total:

price * quantity for first product = 10 * 3 = 30
price * quantity for second product = 5 * 4 = 20
Cart total = 30 + 20 = 50.
*/

/**
 * @param {Object[]} products
 * @param {number} products.price
 * @param {number} products.quantity
 */

const getCartTotal = products => {
    return products.reduce((total, current) => {
        console.log(current);
        return total + current.price * current.quantity;
    }, 0);
}


// Sample usage - do not modify
const sampleProducts = [{
    price: 10,
    quantity: 3
}, {
    price: 5,
    quantity: 4
}]
console.log(getCartTotal(sampleProducts)); // 50

