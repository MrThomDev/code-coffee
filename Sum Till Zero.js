const tillZero = (nums) => {
  const targetIndex = nums.indexOf(0);
  const addArr = nums.slice(0, targetIndex);
  return addArr.reduce((a, b) => {
    return a + b;
  }, 0);
};

////Finished
//// Secret Code: 29678DE9
