/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor(start + end / 2);
  while (nums[mid] !== target && start <= end) {
    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return nums[mid] === target ? mid : -1;
};

const testArr = [-1, 0, 3, 5, 9, 12];
console.log(search(testArr, 9));
