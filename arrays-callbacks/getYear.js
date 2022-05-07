// Get year

/*
Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.

*/

function getYear(years, searchYear) {
    return years.find(function(key){
        return key === searchYear;
    });

}

console.log(getYear([2019, 2020, 2021], 2020)); // 2020
