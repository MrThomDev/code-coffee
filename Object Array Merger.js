const objectArrayMerger = (arrayOfObjects) => {
  const outObj = {};
  for (let obj of arrayOfObjects) {
    for (let key in obj) {
      if (outObj[key]) {
        outObj[key].push(obj[key]);
      } else {
        outObj[key] = [obj[key]];
      }
    }
  }
  return outObj;
};

//////////////Finished
/////////////Secret Code: 75CB1C09
