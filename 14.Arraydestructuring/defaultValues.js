var [first = "Cotlin", second = first] = [];

console.log(first); // Output: Cotlin
console.log(second); // Output: Cotlin

var [first = "Cotlin", second = first] = ["Koku"];

console.log(first); // Output: Koku

console.log(second); // Output: Koku

var [first ="Cotlin", second = first] = ["Koku", "Lydia"];

console.log(first); // Output: Koku
console.log(second); // Output: Lydia