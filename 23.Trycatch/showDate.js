/**
* We've provided you with a function getDate() that returns a string representing the current date (for example, 22/3/2021).
* However, this function fails 50% of the time (in an attempt to simulate the concept of functions that might fail sometimes).

* When it fails, the function showDate() also breaks because it's calling getDate().
* Update the implementation of showDate() such that it returns the date (when possible), 
* otherwise the string "Could not get date".
* .helpers.js is part of this program.
 */

import {getDate} from "./helpers.js";

const showDate = () => {
    try {
        const date = getDate();
        return date;
    } catch (error) {
        return "Could not get date."
    }
}


// Sample usage - do not modify
console.log(showDate());