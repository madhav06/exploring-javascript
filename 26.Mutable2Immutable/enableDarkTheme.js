/**
 * Complete the enableDarkMode function such that it returns a clone of the config object it receives with the property darkTheme set to true.
 */

/**
 * @param {Object} config
 * @param {boolean} config.darkTheme
 */

const enabledarkTheme = config => {
    return {...config, darkTheme: true};

} 

// Sample usage - do not modify
const config = {
    darkTheme: false
};
console.log(enableDarkTheme(config)); // {darkTheme: true} (new object)