<h4>Code Blocks</h4>
<pre>
JavaScript statements can be grouped together inside curly brackets. Such groups are known as code blocks. The purpose of grouping is to define statements to be executed together.
</pre>

```
<!DOCTYPE html>
<html>

<body>
	<p>Welcome</p>

	<button type="button"
		onclick="myFunction()">
	    Click Me!
    </button>

	<p id="geek1"></p>
	<p id="geek2"></p>

	<script>
        
		function myFunction() {
			
			document.getElementById(
			"geek1").innerHTML = "Hello";
			
			document.getElementById(
			"geek2").innerHTML =
			"How are you?";
		}
	</script>

</body>

</html>

```
> White Space
* JavaScript ignores multiple white spaces.
<pre>
var a="Hello Charlie";
var a = "Jim Corbett";
</pre>
>Line Length and Line Breaks
In Javascript code preferred, the best place to break a code line in Javascript, is after an operator.(=)
<pre>
document.getElementById("person1").innerHTML =
"Hello Charlie";
</pre>
#### Keywords:
<pre>
* break: 
* continue:
* do...while:
* for:
* function:
* return:
* var: 
* switch:
</pre>
