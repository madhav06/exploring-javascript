/*
param {number[]} grades
*/

/*
An exam must be canceled if all the students' grades,
were very high (18 or above).

When exam is canceled, function returns true.

*/

const shouldCancelExam = grades => {
    return grades.every(grade  =>  grade > 18);
}

console.log(shouldCancelExam([18,4])); // false
console.log(shouldCancelExam([19,18,18])); // true