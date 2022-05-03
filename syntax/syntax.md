<h3>JavaScript Syntax</h3>

>Definition:

<pre>
JavaScript is a lightweight and dynamic computer programming language. It is used to create client-side dynamic pages. It is open-source and cross-platform language.
</pre>
<pre>
* Local variables: Declare a variable inside of block or function.

* Global variables: Declare a variable outside function or with a window object.

</pre>
> Javascript Operator
<pre>
JavaScript operators are symbols that are used to compute the value or in other word we can perform operations on operands. (=, +=, %= , +, -, *, /)
</pre>
> JavaScript Expression
<pre>
Expression is the combination of values, operators, and variables. It is used to compute the values.
</pre>

```
<script>

// Variable Declarations
var x, num, sum;

// Assign value to the variables
x = 20;
y = 30

// Expression to divide a number
num = x / 2;

// Expression to add two numbers
sum = x + y;

document.write(num + "<br>" + sum);

</script>

```

> JavaScript Data Types
<pre>
JavaScript provides different datatype to hold different values on variable. JavaScript is a dynamic programming language, There are two types of data types in JavaScript.

* Primitive
* Non-primitive
</pre>

<pre>
// It store string data type
var txt = "GeeksforGeeks";

// It store integer data type
var a = 5;
var b = 5;

// It store Boolean data type
(a == b )
 
// It store array data type
var places= ["GFG", "Computer", "Hello"];

// It store object data
var Student = {firstName:"Johnny", lastName:"Diaz", age:35, mark:"blueEYE"}
</pre>

>JavaScript Function
<pre>
JavaScript functions are the blocks of code used to perform some particular operations. JavaScript function is executed when something call it. It calls many times so the function is reusable.
</pre>
* syntax:
```
function functionName( par1, par2, ....., parn ) {  
    // Function code
}
```
* JavaScript function can contain zero or more arguments.
```
<script>

// Function definition
function func() {
	
	// Declare a variable
	var num = 45;				
	
	// Display the result
	document.writeln(num);	
}

// Function call
func();

</script>

```
