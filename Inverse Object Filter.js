const inverseObjectFilter = (obj, keyExclusionList) => {
  const outObj = {};
  for (let key in obj) {
    if (keyExclusionList.includes(obj[key])) {
      console.log(obj[key], " exists in array");
    } else {
      outObj[key] = obj[key];
    }
  }
  return outObj;
};

///////////////////////Finished
//////////////////////Secret Code: E52F575B
