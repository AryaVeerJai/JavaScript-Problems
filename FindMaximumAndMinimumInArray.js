// How to find Maximum and Minimum in a array using JavaScript
// In JavaScript, you can find the maximum and minimum values in an array by using the 'Math.max()' and 'Math.min()' functions. 
// These functions take any number of arguments and return the maximum or minimum value respectively.
// To find the maximum value in an array, you can use the 'apply() method to pass the array elements as arguments to the 'Math.max()' function. Here's an example:

const numbers = [5, 8, 2, 10, 3];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 10


// In this example, the 'apply()' method is used to pass the elements of the numbers array as individual arguments to the 'Math.max()' function, 
// which returns the maximum value of the array.

// Similarly, you can use the 'apply()' method to find the minimum value in an array using the 'Math.min()' function. Here's an example:
const numbers = [5, 8, 2, 10, 3];
const min = Math.min.apply(null, numbers);
console.log(min); // Output: 2

// In this example, the 'apply()' method is used to pass the elements of the numbers array as individual arguments to the 'Math.min()' function, 
// which returns the minimum value of the array.
