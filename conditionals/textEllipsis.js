// Complete the function getDescription such that,
// it returns the first 10 characters of the text parameter,
// it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...

/*
However, whenever the text is 10 characters or less,
the ellipsis should not be added because the text is not being trimmed!

*/

/**
 * @param {string} text
 */
 export function getDescription(text) {
    if (text.length > 10) {
        return text.substring(0, 10) + "...";
    }
    return text;
}