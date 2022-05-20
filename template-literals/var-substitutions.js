let price = 8.99
tax = 0.1

let netPrice = `Net Price: $${(price * (1 + tax)).toFixed(2)}`;

console.log(netPrice);