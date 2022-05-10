<h4>stopPropagation() </h4>

<pre>
The stopPropagation() method immediately stops the flow of an event through the DOM tree. However, it does not stop the browers default behavior.
</pre>

```
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});

```