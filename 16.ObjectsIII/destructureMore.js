/**
* Complete the function getLatLngElevation such that it destructures the userLocation object into 3 variables: lat, lng & elevation.
* The elevation should default to 0.

* After destructuring successfully, the function will automatically return a string that describes the location.
**/

/**
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 * @param {number} [userLocation.elevation]
 */
 const getLatLngElevation = userLocation => {
    //destructure into 3 variables: lat, lng & elevation (defaulting to 0)
    const {lat, lng, elevation=0} = userLocation

    return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`;
}

// Sample usage - do not modify
const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
};
console.log(getLatLngElevation(userLocation));