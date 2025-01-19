const linearSearch = (array, elementToFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToFind) return `index of element is ${i}`;
  }
  return -1;
};

// Worst case is element at the end || not exists
// o(n)

// best case is element at the first
// o(1)

console.log(linearSearch([2, 5, 4, 7, 8, 9, 6], 2));
