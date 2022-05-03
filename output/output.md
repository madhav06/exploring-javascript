<h3>JavaScript Output</h3>
<pre>
JavaScript Output defines the ways to display the output of a given code. The output can be display by using four different ways 
</pre>

#### innerHTML: 
<p>It is used to access an element. It defines the HTML content.</p>

<pre>
//syntax

document.getElementById(id)
</pre>

```
<!DOCTYPE html>
<html>
	
<head>
	<title>
		JavaScript Output using innerHTML
	</title>
</head>

<body>
	<h1>GeeksforGeeks</h1>

	<h2>
		JavaScript Display Possibilities
		Using innerHTML
	</h2>

	<p id="MIT"></p>
	
	<!-- Script to uses innerHTML -->
	<script>
		document.getElementById("MIT").innerHTML
				= 10 * 2;
	</script>
</body>

</html>					

```

#### document.write():
<p>It is used for testing purpose.</p>

* document.write()
* This example uses document.write() property to display data.
```
<!DOCTYPE html>
<html>
	
<head>
	<title>
		JavaScript Output using document.write()
	</title>
</head>

<body>
	<h1>University of Toronto</h1>

	<h2>
		JavaScript Display Possibilities
		Using document.write()
	</h2>

	<p id="UT"></p>
	
	<!-- Script to uses document.write() -->
	<script>
		document.write(10 * 2);
	</script>
</body>

</html>					

```

#### window.alert:
<p>Displays the content using the alert box.</p>

* syntax
* This example uses window.alert() property to display data.

```
<!DOCTYPE html>
<html>
	
<head>
	<title>
		JavaScript Output using window.alert()
	</title>
</head>

<body>
	<h1>University of Toronto</h1>

	<h2>
		JavaScript Display Possibilities
		Using window.alert()
	</h2>

	<p id="UT"></p>

	<!-- Script to use window.alert() -->
	<script>
		window.alert(10 * 2);
	</script>
</body>

</html>					

```

#### console.log:
<p>It is used for debugging purposes.</p>

* syntax
* This example uses console.log() property to display data.

```
<!DOCTYPE html>
<html>
	
<head>
	<title>
		JavaScript Output using innerHTML
	</title>
</head>

<body>
	<h1>University of Toronto</h1>

	<h2>
		JavaScript Display Possibilities
		Using console.log()
	</h2>

	<p id="UT"></p>
	
	<!-- Script to use console.log() -->
	<script>
		console.log(10*2);
	</script>
</body>

</html>					

```

