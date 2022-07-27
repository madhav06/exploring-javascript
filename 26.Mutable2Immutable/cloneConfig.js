/**
 * Complete the cloneConfig function such that it returns a new copy of the config parameter it receives.
 */

/**
 * @param{Object} config
 * @param {boolean} config.darkTheme
 */

const cloneConfig = config => {
    return {...config};
}

// Sample usage

const originalConfig ={
    darkTheme: true
};

const result = cloneConfig(originalConfig);
console.log(result);
// {darkTheme: true} new object

console.log(originalConfig === result);
// false