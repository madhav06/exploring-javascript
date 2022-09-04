export const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        if (callback) {
            callback(); // call the success callback
        }
    }, 1000);
}