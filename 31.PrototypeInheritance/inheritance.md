```
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    isSquare() {
        return this.width === this.height;
    }
}
```

#### class is a function

Before the <b> class </b> keyword was added to the language in 2015, here is how we used to write classes:

```
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
```

this function serves as the constructor. Its called the function constructor pattern in JavaScript.

#### Adding instance methods

```
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.isSquare = function() {
    return this.width === this.height;
}
```

#### Why is there a prototype?

You can think of prototype as an object that contains all the instance methods that a certain function can have. This prototype is linked in what we call the prototype chain.

So, by assigning a new function to Rectangle.prototype you are adding a new instance method to the instances of Rectangle.

That means, every time you create a new Rectangle, that instance will have an instance method isSquare which can access the instance properties via <b> this.width </b> or <b> this.height </b>

#### Documentation

If you take a look at the documentation on Mozilla Developer Network, you often see <b> String.prototype.trim(). </b>
What this means is that <b> trim() </b> is a method that can be called on instances of <b>String.</b> This means, <b>trim()</b> can be called on any new string that you create.
