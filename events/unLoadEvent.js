/* The unload event fires when a document has completely unloaded.
Typically, the unload event fires when you navigate from one page to another.
To handle the unload event, you can use the addEventListener() method: */

addEventListener('unload', (event) => {
    console.log('The page is unloaded');
});

