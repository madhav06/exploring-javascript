// Get next age II

// Complete the function getNextAge such that, 
// it returns the age next year (by adding 1 to the current age).

/**
 * @param {string} age
 */
 export function getNextAge(age) {
    if (age === "") {
        return 0;
    }
    
    return Number.parseInt(age, 10) + 1;
}

