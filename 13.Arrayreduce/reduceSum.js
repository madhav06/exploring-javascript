/*
Visualize in console the value of total, current and finally sum.

The value of total starts at 0.
The value of current a single item of the array for every iteration.
The value of total is the result of last run of reducer.
*/

/*
@param {grades} array
*/

let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
    console.log(`Total is ${total}`);
    console.log(`Current is ${current}`);
    console.log("---");

    return total + current;
},0);

console.log(`Sum is ${sum}`);