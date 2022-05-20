function format(literals, ...substitutions) {
    let result = '';

    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }

    result += literals[literals.length - 1];
    return result;
}

let quantity = 9,
priceEach = 8.99,
result = format`${quantity} item cost $$ {(quantity * priceEach).toFixed(2)}`;

console.log(result);