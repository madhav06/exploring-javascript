<h3>JavaScript Fat Arrow Functions </h3>

* Without arrow function:


```
let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers); // [6,4,2]

```

* With arrow function, code is more concise:

```
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); // [6,4,2]

```

* Using arrow function with map(  ):

```
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);


// output:

[ 4, 3, 5 ]
```

* An arrow function doesn’t have the arguments object. For example:

```
function show() {
    return x => x + arguments[0];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15
```

<pre>
The arrow function inside the showMe() function references the arguments object. However, this arguments object belongs to the show() function, not the arrow function.
</pre>

* When you define a function using a function keyword, the function has a property called prototype:

```
function dump( message ) {
    console.log(message);
}
console.log(dump.hasOwnProperty('prototype')); // true
```

* However, arrow functions don’t have the prototype property:

```
let dump = message => console.log(message);
console.log(dump.hasOwnProperty('prototype')); // false
```

<h4>NOTE: It is a good practice to use arrow functions for callbacks and closures because the syntax of arrow functions is cleaner.

</h4>

<h4>
NOTE: An arrow function doesn’t have its binding to this or super.
</h4>
