<h4>preventDefault() </h4>

To prevent the default behavior of an event, you use the preventDefault() method.

<pre>
when you click a link, the browser navigates you to the URL specified in the href attribute:

<a href="https://www.javascripttutorial.net/">JS Tutorial</a>
Code language: HTML, XML (xml)
However, you can prevent this behavior by using the preventDefault() method of the event object:
</pre>

```
let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});
```

