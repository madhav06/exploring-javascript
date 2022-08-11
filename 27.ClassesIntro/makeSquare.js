/**
 * We have created a class Rectangle for you. 
 * Complete the function makeSquare such that it returns a new instance of Rectangle. 
 * Choose any width and height you want as long as they are the same value so that you create a square.
 */

class Rectangle {
    /**
     * @param {number} width
     * @param {number} height
     */

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const makeSquare = () => {
    // return a new instance of Rectangle with
    // same width and height

    // example: 10 for width and 10 for height
    const squared = new Rectangle(10, 10)
    return squared;
   
}

console.log(makeSquare())