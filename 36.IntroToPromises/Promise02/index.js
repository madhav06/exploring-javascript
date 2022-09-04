/*
Visualize Promise II
This is a visualization challenge.
The function randomWait waits between 1 and 4 seconds (it chooses a random value every time).
Run the code and take a look at the output.
Your code is running top to bottom, however, some code might be scheduled into the future. That's the case with the .then(callback).
*/
import {randomWait} from "./helpers.js";

console.log("A");
randomWait().then(() => {
    // this runs when the randomWait() function has completed successfully
    console.log("B");
})
console.log("C");