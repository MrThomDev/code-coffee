const isInOrderPosNeg = (nums) => {
  const posArr = [];
  const negArr = [];

  for (let el of nums) {
    if (el > 0) {
      posArr.push(el);
    } else {
      negArr.push(el);
    }
  }

  const posSort = [...posArr];
  posSort.sort((a, b) => a - b);
  const negSort = [...negArr];
  negSort.sort((a, b) => b - a);

  if (posArr.join() === posSort.join() && negArr.join() === negSort.join()) {
    return true;
  } else {
    return false;
  }
};

////////////////////Finished
///////////////////Secret Code: D221FE7F
