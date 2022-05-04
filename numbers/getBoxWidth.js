// Get box width

/* Complete the function getBoxWidth such it returns,
 the width (as a number) from the string it receives.
*/ 

/**
 * @param {string} value
 */
export function getBoxWidth(value) {
    // value 50px = '50px'
    // -- 50px == width
    return Number.parseInt(value, 10); 

}