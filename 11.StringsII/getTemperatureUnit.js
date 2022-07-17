// TODO: Complete the function "getUnit".

/**
 * @param {string} text
 */

//TODO: It should return "Celsius" when °C is found in the string.
//TODO: It should return "Fahrenheit" when °F is found in the string.
//TODO: It should return "N/A" (Not Applicable) in all other cases.

const getUnit = text => {
    if(text.includes("°C")){
        return "Celsius"
    }
    else if (text.includes("°F")){
        return "Fahrenheit"
    }
    else return "N/A"
}

console.log(getUnit("It is 15°C today")); // Celsius
console.log(getUnit("It was 90°F yesterday")); // Fahrenheit