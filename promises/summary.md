<pre>
Promises in JavaScript: 

By definition, a promise is an object that encapsulates the result of an asynchronous operation.
</pre>

<pre>
3 States of Promises: 

Pending

Fulfilled with value

Rejected for reason

</pre>

<pre>
To create a promise object, you use the Promise() constructor:
</pre>

```
const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});
```

* the executor accepts two callback functions with the name ***resolve*** and ***reject***.

* A promise is an object that encapsulates the result of an ***asynchronous operation***.

* A promise starts in the ***pending state*** and ends in either ***fulfilled state*** or ***rejected state***.

* Use then( ) method to schedule a callback to be executed when the promise is ***fulfilled***, and catch( ) method to schedule a callback to be invoked when the promise is ***rejected***.

* Place the code that you want to execute in the finally( ) method whether the promise is ***fulfilled*** or ***rejected***.
