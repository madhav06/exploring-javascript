// Nutrition table II

/*
Complete the function renderTableRows such that it returns the following HTML:

<tr>
    <td>label here</td>
    <td>value here</td>
</tr>
for every row that it receives in its rows parameter.

The rows parameters looks like the following:

[["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]

*/

/**
 * @param {array[][]} rows
 */
 export function renderTableRows(rows) {
    let html = "";
    rows.forEach(function(row) {
        html += `<tr>
        <td>${row[0]}</td>
        <td>${row[1]}</td>
    </tr>`
    });
    return html;
}