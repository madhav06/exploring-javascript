// TODO: define an arrow function "sumGrades " such that it returns sum of all grades it receives as parameter.


/*
@param {number[]} grades
*/

const sumGrades = (grades) => {
    let sum = 0;
    grades.forEach((grade) => {
        console.log(grade);

        sum = sum + grade;
    });
    return sum
}

console.log(sumGrades([15,5,10])); //30
console.log(sumGrades([12, 10, 13, 19])); // 54