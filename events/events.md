<h3>Introduction to JavaScript events
</h3>

<pre>
An event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.
</pre>

<pre>
Each event may have an event handler which is a block of code that will execute when the event occurs.

// An event handler is also known as an event listener. 
</pre>


To define the code that will be executed when the button is ___clicked___, you need to register an event handler using the **addEventListener()** method:

```
let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);
```

>How it works 
* Select the button with the id, btn by using the querySelector() method.

* Then, define a function called display() as an event handler.

* register event handler using addEventListener(),
so that when users click the button, the display() function will be executed.

<h4>Event Object </h4>

<pre>
When the event occurs, 
the web browser passed an Event object to the event handler:
</pre>

```
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log(event.type);
});
```

<pre>
Note that the event object is only accessible inside the event handler. 
Once all the event handlers have been executed, 
the event object is automatically destroyed.
</pre>


