// TODO: return all the grades raised by 1 (grades should not exceed 20)
/** @param {number[]} grades */
// TODO: Implicit Arrow function use.
export const getRaisedGrades = (grades) => {
    return grades.map(grade => {
        if (grade + 1 > 20) {
            return 20
        }
        return grade + 1
    });
}