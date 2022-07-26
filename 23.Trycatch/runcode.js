/**
 * Start this challange by visualizing how the console will only log "Step 1" and then the
 * error but no "Step 2" because an error has occured and we did not recover from it.
 * Then, fix That while keeping the getDat() call.
 */

const runCode = () => {
    console.log("Step 1");
    try {
        getData();
    } catch(error) {
        console.log(error);
    }

    console.log("Step 2");
}

// Sample usage - do not modify
runCode();