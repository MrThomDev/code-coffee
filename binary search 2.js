/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start;
  let mid;
  let end;
  let targetIndex;
  let offset;

  if (nums.length < 3) {
    if (target === nums[0]) {
      targetIndex = 0;
    } else if (target === nums[1]) {
      targetIndex = 1;
    } else {
      targetIndex = -1;
    }
  }

  const subArr = (arr) => {
    if (arr.length % 2 === 0) {
      start = 0;
      mid = arr.length / 2;
      end = arr.length - 1;
    } else {
      start = 0;
      mid = Math.floor(arr.length / 2);
      end = arr.length - 1;
    }
  };
  if (targetIndex) {
    return targetIndex;
  } else if (nums.length === 3) {
    subArr(nums);
    if (target === nums[start]) {
      targetIndex = start;
    } else if (target === nums[mid]) {
      targetIndex = mid;
    } else if (target === nums[end]) {
      targetIndex = end;
    } else {
      targetIndex = -1;
    }
  } else {
    subArr(nums);
    if (target === nums[mid]) {
      targetIndex = mid;
      return targetIndex;
    }
    if (target < mid) {
      search(nums.slice(start, mid), target);
    }
    if (target > mid) {
      search(nums.slice(mid, end + 1), target);
    }
  }
  return targetIndex;
};

const testArr = [-1, 0, 3, 5, 9, 12];
console.log(search(testArr, 2));
