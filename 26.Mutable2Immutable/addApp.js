/**
 * Complete the function addApp such that it immutably adds
 * the "app" parameter to the apps array it receives.
 * This means that the original array should not be modified.
 */

/**
 * @param {string[]} apps
 * @param {string} app
 */


const addApp = (apps, app) => {
    return [...apps, app];
}

// Sample usage

const originalApps = ["calculator", "Phone", "Fax"];
console.log(addApp(originalApps, "Staples")); 
// ["Calculator", "Phone", "Fax", "Staples"] (immutable)

console.log(originalApps); // ["Calculator", "Phone", "Fax"] (unmodified)
