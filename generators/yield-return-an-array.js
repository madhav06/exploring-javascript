//Using yield to return an array
function* yieldArray() {
    yield 1;
    yield [ 20, 30, 40 ];
}

let y = yieldArray();

console.log(y.next()); 
console.log(y.next()); 
console.log(y.next());
