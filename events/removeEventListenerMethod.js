/*
The removeEventListener() removes an event listener that was added via the addEventListener().
 However, you need to pass the same arguments as were passed to the addEventListener().
  For example:

*/

let btn = document.querySelector('#btn');
btn.addEventListener('click',function() {
   alert('Clicked!');
});

// won't work
btn.removeEventListener('click', function() {
   alert('Clicked!');
});