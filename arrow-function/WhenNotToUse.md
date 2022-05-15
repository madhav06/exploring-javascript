<h3>When You Should Not Use Arrow Functions
</h3>

> 1) Event handlers
<pre>
An arrow function doesn’t have its own this value and the arguments object. Therefore, you should not use it as an event handler, a method of an object literal, a prototype method, or when you have a function that uses the arguments object.
</pre>

> 2) Functions that use the arguments object
<pre>
Arrow functions don’t have the arguments object. Therefore, if you have a function that uses arguments object, you cannot use the arrow function.

</pre>

<p>For example, the following concat() function won’t work:</p>

```
const concat = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
```
Instead, you use a regular function like this:

``` 
function concat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
```