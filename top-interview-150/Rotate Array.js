const nums = [1, 2];
let k = 3;

const reverseArray = (array, start, end) => {
  while (start < end) {
    // let temp = nums[i];
    // nums[i] = nums[j];
    // nums[j] = temp;

    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
};

const rotate = (array, k) => {
  k = k % nums.length;
  reverseArray(array, 0, array.length - 1); //reverse entire arr
  reverseArray(array, 0, k - 1); //reverse target
  reverseArray(array, k, array.length - 1); //reverse remaining
};

console.log(rotate(nums, k));
console.log(nums);

// return [...nums.slice(-k), ...nums.slice(0, -k)];
