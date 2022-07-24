/** 
Complete the getTotalSales function such that it returns the total value of sales for the users parameter it receives.
When a user is subscribed, you will get a subscription object which contains the value. 
Otherwise, the subscription object will not be present.
*/


/**
 * @param {object[]} users
 * @param {number} users.id
 * @param {string} users.name
 * @param {object} [users.subscription]
 * @param {object} [users.subscription.info]
 * @param {number} [users.subscription.info.value]
 */
 const getTotalSales = users => {
    let sum = 0;
    users.forEach(user => {
        // console.log(user.subscription);
        sum += user.subscription?.info?.value ?? 0;
        // OR
        // sum = sum + (user.subscription?.info?.value ?? 0); // parentehsis are required here because ?? has lower precedence
    });
    return sum;
}

// Sample usage - do not modify
const users = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sam", subscription: {info: {value: 59}}},
    {id: 3, name: "Charlie", subscription: {info: {value: 31}}}
];
console.log(getTotalSales(users)); // 90