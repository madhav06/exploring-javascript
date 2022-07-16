// TODO: define an arrow function "Advanced program to complete getDropdown"

/*
It should start with: <option value="">Please select</option>

Then, for every country you should have the <option> for that. For example, for the country "Netherlands", 
you should have the following <option value="netherlands">Netherlands</option>
*/

/**
 * @param {string[]} countries
 */
 export function getDropdown(countries) {
    let dropdown = `<option value="">Please select</option>`;
    countries.forEach(country => {
        dropdown = dropdown + `<option value="${country.toLowerCase()}">${country}</option>`;
    });
    return dropdown;
}