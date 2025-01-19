const binarySearch = (array, elementToFind) => {
  let start = 0;
  let end = array.length - 1;
  let middle;
  while (end >= start) {
    middle = Math.floor(start + (end - start) / 2);
    console.log(middle);

    if (array[middle] === elementToFind) {
      return `index of element is ${middle}`;
    } else if (array[middle] > elementToFind) {
      end = middle - 1;
    } else if (array[middle] < elementToFind) {
      start = middle + 1;
    }
  }
  return -1;
};

// Worst case is element at the end || at the first || not exists
// o(lg n)

// best case is element at the middle
// o(1)

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
