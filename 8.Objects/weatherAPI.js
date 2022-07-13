/*
For this challenge, we're already calling the weather API for you in the index.js. You have to complete the following functions in weather.js:

getCountry which returns the country for which we're showing the weather.
getIcon which returns the icon.
getTemperature which returns the temperature.

*/

/** @param {Object} data */
/** @param {Object} data */

export function getCountry(data) {
    return data.location.country;
}

export function getIcon(data) {
    return data.current.weather_icons[0];
}

export function getTemperature(data) {
    return data.current.temperature;
}

