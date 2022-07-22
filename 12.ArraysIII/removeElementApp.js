/*
remove the first element of the apps array,
from function removeFirstApp it receives as parameter
and return the new array.
Which should not contain the item that was removed.
*/

const removeFirstApp = apps => {
    apps.splice(0,1); // removes one element at index 0
    return apps;
}

//Sample
const apps = ["Calculator", "Whatsapp", "Firefox"];

console.log(removeFirstApp(apps));

// ["Whatsapp", "Chrome", "Firefox"]

