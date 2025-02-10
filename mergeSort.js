const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  console.log({ left, right });
  const sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
};

console.log(mergeSort([8, 9, 7, 1, 2, 5, 4, 6, 8, 0]));

// const mergeSort = () => {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   //Recursive
// };

// const merge = (left, right) => {
//   let i = 0;
//   let j = 0;
//   let results = [];

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       results.push(left[i]);
//       i++;
//     } else {
//       results.push(left[j]);
//       j++;
//     }
//   }

//   for (; i < left.length; i++) {
//     results.push(left[i]);
//   }

//   for (; j < right.length; j++) {
//     results.push(right[j]);
//   }

//   return results;

//   //   return result.concat(left.slice(i)).concat(right.slice(j));
// };
