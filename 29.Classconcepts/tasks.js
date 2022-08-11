/**
 * Implement a getter for the todos property in the Tasks class.
 * Each todo should be seperated by a comma and space character.
 */

class Tasks {
    /**
     * @param {string[]} todos
     */
    constructor(todos) {
        this._todos = todos;
    }

    get todos() {
        console.log("todos getter");
        return this._todos.join(" ,")
    }
}


// Sample
const tasks = new Tasks(["Laundry", "Clean kitchen"]);
console.log(tasks.todos);
// "Laundry, Clean kitchen"
