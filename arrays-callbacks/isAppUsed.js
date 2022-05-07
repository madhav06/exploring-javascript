// Is app used?

/*
Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.

*/

function isAppUsed(apps, app) {
    
    return apps.includes(app)


}

console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true