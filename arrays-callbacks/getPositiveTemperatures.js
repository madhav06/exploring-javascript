// Positive temperatures

/*
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).

*/

function getPositiveTemperatures(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature > 0;
    });
}
console.log(getPositiveTemperatures([-5, 12, 3]));
