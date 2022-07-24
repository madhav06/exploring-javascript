/** 
Complete the function getTranslation such that,
it returns the correct translation for the word "welcome" depending on the language chosen by the user.
When the translation is not found, 
default to the translation "Welcome" (you can either hard-code it or pull it from the translation file).
Make sure to check out the different logs in the console when you select a value in the dropdown in the browser tab. 
We've added 2 languages that do not have a translation so that you can test your logic.
*/

import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
    return translations.welcome[language] ?? "Welcome"
    console.log(translations);
    console.log(language);

}