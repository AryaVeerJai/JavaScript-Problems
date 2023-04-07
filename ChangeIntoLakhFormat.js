// How to format a number into Lakh Eg: 1.5 Lakh or 10.5 Lakh in JavaScript
// Example 1 : 150000 = 1.50 Lakh
// Example 2 : 1050000 = 10.50 Lakh
// To convert a number into lakh format in JavaScript, you can divide the number by 100,000 and then append the "Lakh" suffix to it. 
// Here's an example code snippet to convert a number into lakh format:
function formatNumberToLakh(number) {
  if (typeof number !== 'number') {
    return NaN; // return NaN if the argument is not a number
  }
  return (number / 100000).toFixed(2) + ' Lakh';
}

// Example usage
console.log(formatNumberToLakh(100000)); // output: 1.00 Lakh
console.log(formatNumberToLakh(1000000)); // output: 10.00 Lakh
console.log(formatNumberToLakh('invalid number')); // output: NaN

// In this example, the 'formatNumberToLakh' function takes a number as an argument, checks if it's a valid number or not, and then divides it by 100,000 and formats it with the 'toFixed' method to display two decimal places. Finally, it appends the "Lakh" suffix to the formatted number and returns the result.
