// The following example uses the yield keyword as elements of an array:


function* baz() {
    let arr = [yield, yield];
    console.log(arr);
}

var z = baz();

console.log(z.next());  
console.log(z.next(1)); 
console.log(z.next(2));
