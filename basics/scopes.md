#### Variable scope
When you declare a variable outside of any function, it is called a **GLOBAL VARIABLE**, because it is available to any other code in the current document. When you declare a variable within a function, it is called a **LOCAL VARIABLE**, because it is available only within that function.
#### Hoisting in JS
<pre>
Hoisting is a behaviorin which a function or a variable can be used before declaration. For example,

// using test before declaring

console.log(test);   // undefined

var test;
</pre>
> The above program works and the output will be undefined. The above program behaves as:
<pre>
// using test before declaring

var test;

console.log(test); // undefined
</pre>
**Since the variable test is only declared and has no value, undefined value is assigned to it.**

>NOTE: In terms of variables and constants, keyword ***var*** is hoisted and ***let*** and ***const*** does not allow hoisting.
<pre>
Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.

JavaScript allocates memory for all variables and functions defined in the program before execution.
</pre>