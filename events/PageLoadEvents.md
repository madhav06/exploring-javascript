<h4>JavaScript Page Load Events
</h4>

* Overview of JavaScript page load events

* When you open a page, the following events occur in sequence:

<pre>
DOMContentLoaded – the browser fully loaded HTML and completed building the DOM tree. However, it hasn’t loaded external resources like stylesheets and images. In this event, you can start selecting DOM nodes or initialize the interface.
</pre>

<pre>
load – the browser fully loaded the HTML and also external resources like images and stylesheets.
</pre>

* When you leave the page, the following events fire in sequence:

<pre>
beforeunload – fires before the page and resources are unloaded. You can use this event to show a confirmation dialog to confirm if you really want to leave the page. By doing this, you can prevent data loss in case you are filling out a form and accidentally click a link to navigate to another page.
</pre>

<pre>
unload – fires when the page has completely unloaded. You can use this event to send the analytic data or to clean up resources.
</pre>