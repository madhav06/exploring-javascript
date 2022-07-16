// TODO: define an arrow function "getPositiveTemperatures"

/*
such that it returns an array containing positive temperatures (above 0).

@param {number[]} temperatures
*/

const getPositiveTemperatures = (temperatures) => {
    return temperatures.filter(temperature => {
        return temperature > 0;
    });
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

