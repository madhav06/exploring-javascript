/**
 * @param {array} apps
 * 
 * Empty the array: items array which,
 * resetItems function receives as a parameter.
 */
 const resetItems = items => {
    return items.length = 0;

}

// Sample usage - do not modify
const items = ["Pen", "Paper", "Staples", "Marker"];
console.log(resetItems(items));