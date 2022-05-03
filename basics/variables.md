 In programming (javascript), variables are containers for values that change. Before you use a variable in a JavaScript program, you must declare it. Variables are declared with the **var** keyword as follows.
 
 <pre>
 var x = 5;
 var y = 6;
 var z = x+y;
 </pre>
 
 >In this example:
 <pre>
 x stores the value 5
 y stores the value 6
 z stores the value 11
 </pre>
 #### Kinds of Variables
 **var:** Declares a variable, optionally initializing it to a value.

 **let:** Declares a block-scoped, local variable, optionally initializing it to a value.

 **const:** Declares a block-scoped, read-only named constant.

#### JavaScript Variable Scope
 The scope is the region in which the variable is defined. JavaScript variables have only two scopes.

 **Global Variables** − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

 **Local Variables** − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

 **NOTE** - Within the body of of a function, local variable takes precedence over a global variable, with the same name.
<pre>
myName
myAge
</pre>
> They currently have no value; they are empty containers. When you enter the variable names, you should get a value of undefined returned. 
#### Initializing a variable
type the variable name, followed by an equals sign (=), followed by the value you want to give it. For example:
<pre> 
myAge = 37;
console.log(myAge);

myName = 'Chris';
console.log(myName);
</pre>
#### Updating a variable
Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value. 
<pre> 
let myName = 'Chris';
myName = 'Bob';
console.log(myName);
</pre>
#### Variable naming rules
* Don't use numbers at the start of variables. This isn't allowed and causes an error.

* Don't use underscores at the start of variable names.

* A safe convention to stick to is so-called "lower camel case. ex - eBay, makeMyTrip, codeIndia etc. 

* Variables are case sensitive — so myage is a different variable from myAge.

* One last point: you also need to avoid using JavaScript reserved words as your variable names.
### Variable types
There are a few different types of data we can store in variables.
> Numbers
<p>You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers).</p>
<pre>
let myAge = 17;
</pre>
> Strings
<p>Strings are pieces of text. When you give a variable a string value, wrap it in single or double quote marks.</p>
<pre>
let dolphinGoodbye = 'So long and thanks for all the fish';
</pre>
> Booleans
<p>Booleans are true/false values — they can have two values, true or false. These are generally used to test a condition, after which code is run as appropriate.</p>
<pre>
let iAmAlive = true;
let test = 6 < 3; 
console.log(test); // should return false
</pre>
> Arrays
An array is a single object that contains multiple values, of same type seperated by commas. We use square brackets for arrays.
<pre>
let myNameArray = ['Chris', 'Bob', 'Jim'];
</pre>
<pre>
let myNumberArray = [10, 15, 40];
</pre>
<pre>
console.log(myNameArray);
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
</pre>

> Null or null
<pre> 
null: a variable that contains null contains no valid Number, String, Boolean, Array, or Object
</pre>
> Undefined
<pre>
the undefined value is obtained when you use an object property that does not exist, or a variable that has been declared, but has no value assigned to it.
</pre>

#### Objects
Object is a structure of code that models a real-life object. object that represents a person, and contains data about their name, height, weight etc.
<pre>
let dog = { name : 'Spot', breed : 'Dalmatian' };
console.log(dog);
</pre>
To retrieve the information stored in the object, use syntax:
<pre>
dog.name
dog.breed
</pre>
**NOTE**
<pre>
let myNumber = '500'; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;
</pre>
#### Constants in JavaScript
* you must initialize them when you declare them.
* you can't assign them a new value after you've initialized them.
* constant in JavaScript must always name the same value, you can change the content of the value that it names. but JavaScript consider an object only to change the values.
<pre>
const bird = { species : 'Kestrel'};
console.log(bird.species);  // "Kestrel"

//update
bird.species = 'Striated Caracara';
console.log(bird.species);  // "Striated Caracara"
// because the constant is still pointing to the same object:
</pre>
>[Test your skills: variables
](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables)















 
 
