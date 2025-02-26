/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const results = [];
  let start = 0;

  while (start < arr.length) {
    results.push(arr.slice(start, start + size));
    start = start + size;
  }

  return results;
};

console.log(chunk([1, 2, 3, 4, 8, 7, 6, 4], 2));
