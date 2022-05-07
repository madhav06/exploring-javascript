 // Each function has a comment describing what it should return, but you can also find them below:

/*
getNumberOfGrades should return the number of grades.
getSumGrades should return the sum of all the grades.
getAverageValue should return the average value of all grades (sum of all grades divided by the total number of grades).
getPassingGrades should return all passing grades (10 and above).
getFailingGrades should return all failing grades (9 and below).
getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20).

*/


export function getNumberOfGrades(grades) {
    return grades.length;
}


export function getSumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade
    });
    return sum;
}


export function getAverageValue(grades) {
    return getSumGrades(grades) / grades.length;
}


export function getPassingGrades(grades) {
    return grades.filter(function(grade) {
        return grade >= 10;
    });
}


export function getFailingGrades(grades) {
    return grades.filter(function(grade) {
        return grade < 10;
    });
}


export function getRaisedGrades(grades) {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}
