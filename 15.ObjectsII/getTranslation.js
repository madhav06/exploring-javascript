/*
* function getTranslation such that it returns
* the correct translation for the word "welcome" depending on the language chosen by the user.
* Make sure to check out the different logs
* in the console when you select a value in the dropdown in the browser tab.
*/

import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
    return translations.welcome[language];
}