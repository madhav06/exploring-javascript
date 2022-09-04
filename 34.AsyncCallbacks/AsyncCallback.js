/*
This is a visualization challenge.
Run the code by adding a comment at the end of the file (code changes will re-run the code) 
and take a look at the output.
Your code is running top to bottom, however, some code might be scheduled into the future.
Feel free to play around with the code and see how that affects the result.
*/

console.log("T");

setTimeout(() => {
    console.log("U");
}, 1000);

console.log("V");

/*
T
V
U
*/