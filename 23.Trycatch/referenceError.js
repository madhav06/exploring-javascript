/**
* Our Code failed with a reference error, fix it using try...catch:
* console.log("Step 1");
* nonExistentFunction(); // ❌ Uncaught ReferenceError: nonExistentFunction is not defined
* console.log("Step 2");
 */


console.log("Step 1");
try {
    nonExistentFunction();
} catch(error) {
    console.log(error);
    // Uncaught ReferenceError: nonExistentFunction is not defined
}
console.log("Step 2");