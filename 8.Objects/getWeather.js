/*
Complete getWeather function such that it returns :
It's currently X degrees in Y

X: Value, Y: City
*/

/*
@param {string} city.name
@param {number} city.value
*/

function getWeather(city) {
    return `It's currently ${city.value} degrees in ${city.name}.`;
}