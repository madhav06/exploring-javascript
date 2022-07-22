/*
remove the second element of the apps array,
from function removeSecondApp it receives as parameter
and return the new array.
Which should not contain the item that was removed.
*/

/*
* @param {array} apps
*/

const removeSecondApp = apps => {
    apps.splice(1,1); // removes one element at index 1
    return apps;
}

//Sample

const apps = ["Calculator", "Whatsapp", "Chrome","Firefox", "Opera"];

console.log(removeSecondApp(apps));

// ["Calculator", "Chrome", "Firefox", "Opera"]