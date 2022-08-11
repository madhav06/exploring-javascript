/**
 * We will write a class that powers a Todo app. The provided code is in index.js file.
 * 
 * 2 example todos structure are included. 
 * 
 * Implement all the 7 instance methods (function) so that the app works.
 * Once the methods implemented, test them in browser tab.
 */

export default class Todos {

    constructor() {
        this.todos = [
            {title: "Learn JavaScript", category: "work"},
            {title: "Meditate", category: "personal"}
        ]
    }

    // remaining instance methods
    getAll() {
        return this.todos;
    }

    getCount() {
        return this.todos.length;
    }

    add(title, category) {
        return this.todos.push({title, category});
    }

    getWork() {
        return this.todos.filter(todo => todo.category === "work");
    }

    getWorkCount() {
        return this.getWork().length;
    }

    getPersonal() {
        return this.todos.filter(todo => todo === "personal");
    }

    getPersonalCount() {
        return this.getPersonal().length;
    }
}