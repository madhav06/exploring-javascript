// TODO: return all failing grades (9 and below)
/** @param {number[]} grades */
// TODO: Implicit Arrow function use.
export const getFailingGrades = (grades) => {
    return grades.filter(grade => grade <= 9)
}