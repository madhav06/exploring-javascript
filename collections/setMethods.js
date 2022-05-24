let chars = new Set(['a', 'a', 'b', 'c', 'c', 'c']);

console.log(chars);
console.log(typeof(chars));

let size = chars.size;
console.log(size);

chars.add('d').add('e').add('f');
console.log(chars);

let exist = chars.has('a');
console.log(exist);

chars.delete('f');
console.log(chars);

chars.clear();
console.log(chars);

