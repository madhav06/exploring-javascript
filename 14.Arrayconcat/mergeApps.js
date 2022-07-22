/*
@param {string[]} apps1
@param {string[]} apps2
*/

/*
getApps function returns a new array containing items,
from both parameter it receives 
*/

const getApps = (apps1, apps2) => {
    const merger = [...apps1, ...apps2];
    return merger;
}

console.log(getApps(["Calculator", "Whatsapp"], ["Chrome", "Firefox"])); 
// ["Calculator", "Whatsapp" "Chrome", "Firefox"]