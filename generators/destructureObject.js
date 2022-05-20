const ratings = [

    {
        user: 'John', score: 3
    },
    {
        user: 'Jane', score: 3
    },
    {
        user: 'David', score: 4
    },
    {
        user: 'Peter', score: 5
    }
];

let sum = 0;

for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`);