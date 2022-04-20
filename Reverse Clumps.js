const reverseClumps = (arr, n) => {
  const outArr = [];
  for (let i = 0; i < arr.length; i += n) {
    outArr.push(arr.slice(i, i + n).reverse());
  }
  return outArr.flat();
};

///////////////////////Finished
//////////////////////Secret Code: 0D3A44BE
