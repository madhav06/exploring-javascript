// JavaScript Object Methods

const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet(); // hello

/*
Here, a function is used as a value for the greet key. 
That's why we need to use person.greet(),
instead of person.greet to call the function inside the object.
*/