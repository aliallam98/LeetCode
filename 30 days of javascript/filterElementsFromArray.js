// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

/*
Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.

Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.

*/

// Solution

const filter = (array, fn) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i],i)) newArray.push(array[i]);
  }
  return newArray;
};
