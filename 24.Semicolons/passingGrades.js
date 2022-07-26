/** 
* We've got an array of users, and the id of the user, grade and Passing status. Set the isPassing field to true for the user with id = 1.
* Notice how the original array gets mutated!
*/

const grades = [{
    id: 1,
    grade: 12,
    isPassing: false // we need to update this
},
{
    id: 2,
    grade: 14,
    isPassing: true
},
{
    id: 3,
    grade: 17,
    isPassing: false
}];

// entry with id = 1
const entry = grades.find(grade => grade.id === 1);
entry.isPassing = true;
console.log(grades); // done