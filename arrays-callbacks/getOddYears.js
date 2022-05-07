// Odd Years

/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.

P.S.: We know that 2020 was an "odd" year but the number 2020 is even ;)

*/

function getOddYears(years) {
    return years.filter(function(year) {
      return year % 2 !== 0;
    });
  }

  console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]