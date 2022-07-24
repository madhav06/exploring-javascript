/**
 * The host is welcoming the user into their apartment. 
* Refactor the getStatus function and avoid using if conditions.

* Note: to be consistent with the rest of the course, 
* we're using the canceled (with one L instead of two). 
* Both words are correct, one of them is American English and the other one is British English. 
* So, make sure you write canceled rather than cancelled to pass the tests.
**/

/**
 * @param {string} host
 * @param {string} user
 * @param {Object} booking
 * @param {string} booking[].status
 */

const getStatus = (host, user, booking) => {
    const messages = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`,
    };
    return messages[booking.status] ?? "Unknown booking status.";
}


//Sample usage
const booking1 = {
    status: "pending"
};
console.log(getStatus("Sam", "Alex", booking1)); // "Hey Alex, we're awaiting confirmation from Sam."
const booking2 = {
    status: "confirmed"
}
console.log(getStatus("Charlie", "Blake", booking2)); // "Hey Blake, Charlie is excited to be hosting you."