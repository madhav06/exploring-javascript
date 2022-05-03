<h3>Where to put JavaScript in an HTML Document ? </h3>

#### JavaScript in body or head:
<pre>
Scripts can be placed inside the body or the head section of an HTML page or inside both head and body.
</pre>
#### JavaScript in head: 
<pre>
A JavaScript function is placed inside the head section of an HTML and the function is invoked.
</pre>
>JavaScript in head:
```
<!DOCTYPE html>
<html>
<head>
	<script>
		function gfg() {
		document.getElementById("demo").innerHTML = "Geeks For Geeks";
		}
	</script>
</head>
<body>
	<h2>JavaScript in Head</h2>
	<p id="demo" style="color:green;">geeksforgeeks.</p>
	<button type="button" onclick="gfg()">click it</button>
</body>
</html>
```
>JavaScript in body: 
```
<!DOCTYPE html>
<html>
<center>
	<body>
		<h2>JavaScript in Body</h2>
		<p id="demo">geeksforgeeks.</p>
		<button type="button" onclick="gfg()">Try it</button>
		<script>
			function gfg() {
			document.getElementById("demo").innerHTML = "Geeks For Geeks";
			}
		</script>
	</body>
</center>
</html>
```
>External JavaScript:
<pre>
JavaScript can also be used as external files. JavaScript files have file extension .js . 
</pre>
```
<!DOCTYPE html>
<html>
<center>
<body>
	<h2>External JavaScript</h2>
	<p id="demo">Geeks For Geeks.</p>
	<button type="button" onclick="myFunction()">Try it</button>
	<script src="myScript.js"></script>
</body>
<center>
</html>

```
>Advantages of External JavaScript:

* Cached JavaScript files can speed up page loading.
* It makes JavaScript and HTML easier to read and maintain.
* It separates the HTML and JavaScript code.

>Best Practice To Use:

The best place to write your JavaScript code is at the end of the document after or right before the body tag to load the document first and then execute the JavaScript code.

