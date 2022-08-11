/**
 * Create a class Course that fits the sample usage. 
 * Capture the constructor params into 2 instance variables name and isCompleted.
 */

/**
 * @param {name} string
 * @param {isCompleted} boolean
 */

class Course {

    constructor(name, isCompleted) {

        this.name = name;
        this.isCompleted = isCompleted;
    }
}

console.log(new Course("Learn JavaScript", false));

console.log(new Course("Learn Python", true));