<h3>Making decisions in your code</h3>

#### conditionals
<pre>
In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. Then conditional statements comes into play.
</pre>
<pre>
Basic if...else :
</pre>
```
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}

// note that you don't have to include the else and the second curly brace block.

// the following is also perfectly legal code:



if (condition) {
  code to run if condition is true
}

run some other code
```
* Example Again

```
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

```
<pre>Nesting if...else:</pre>

<pre>
It is perfectly OK to put one if...else statement inside another one — to nest them. For example, we could update our weather forecast application to show a further set of choices depending on what the temperature is:
</pre>

```
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```
<pre>else...if Statement: </pre>
<pre>
You can also extend an if statement with an else if statement, which adds another conditional with its own block.
</pre>

```
if (false) {
      var outcome = "if block";
} else if (true) {
      var outcome = "else if block";
} else {
      var outcome = "else block";
}

outcome;

// NOTE: You can use multiple if else conditionals, 
but note that only the first else if block runs.
```

<pre>
comparison operators:
</pre>

<pre>
Comparison operators are used to test the conditions inside our conditional statements.
</pre>

<pre>

* === and !== — test if one value is identical to, or not identical to, another.

* < and > — test if one value is less than or greater than another.

* <= and >= — test if one value is less than or equal to, or greater than or equal to, another.
</pre>

<pre>logical operators: </pre>

<pre>
If you want to test multiple conditions without writing nested if...else statements, logical operators can help you. 
</pre>

<pre>

* && — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.

* || — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.
</pre>

```
if (choice === 'sunny' && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```
* Another Example:

```
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}

```
* Multiple Operators combined together:

```
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}
```
<pre>Swith Statements: </pre>

<pre>SYNTAX</pre>

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

* Example:

```
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
```

<pre>Ternary operator: </pre>
<pre>
The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false.
</pre>

<pre>SYNTAX: 

( condition ) ? run this code : run this code instead

</pre>

```
let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';

```
* Another Example:

```
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));
```

>[Test your skills: Conditionals
](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals)



