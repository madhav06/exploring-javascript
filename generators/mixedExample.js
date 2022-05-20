let scores = [168, 221, 440, 258];

scores.message = 'Hi';

console.log("for..in");

for(let score in scores) {
    console.log(score);
}

console.log("for..of");

for(let score of scores) {
    console.log(score);
}