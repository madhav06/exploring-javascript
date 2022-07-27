/**
 * Complete the cloneApps function such that it returns a new copy of the apps parameter it receives.
 */

/**
 * @param {string[]} apps
 */

const cloneApps = apps => {
    console.log(apps);

    return[...apps];
}

// Sample usage
const originalApps = ["Calculator", "Phone", "Printer"];
const copiedApps = cloneApps(originalApps);

console.log(copiedApps); // ["Calculator", "Phone", "Printer"]
console.log(copiedApps === originalApps); // false