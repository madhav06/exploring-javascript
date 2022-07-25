/**
 * Calculate the fictional "social impact"
 * such that the sum of all the likes and retweets for
 * all the tweets is equal to social impact.
 */

const tweets =[
    {
        id: 10512,
        stats: {
            likes: 41,
            retweets: 54
        }
    },
    {
        id: 41241,
        stats: {
            likes: 14,
            retweets: 20
        }
    }
];

const socialImpact = tweets.reduce((total, current) => {
    console.log(current);
    return total + current.stats.likes + current.stats.retweets;
},0);
console.log(socialImpact); // 129