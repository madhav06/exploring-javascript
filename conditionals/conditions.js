// Can you vote? program

/*
Implement the function canVote such that it returns true,
whenever the age 18 or above and false in all other scenarios.

*/

/**
 * @param {number} age
 */
 function canVote(age) {
    if(age >= 18) {
        return true
        // console.log("true");

    } else {
        return false
        // console.log("false");
    }

}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false