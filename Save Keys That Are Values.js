const saveKeysThatAreValues = (obj) => {
  const valueArr = Object.values(obj);
  const outObj = {};
  for (let key in obj) {
    if (valueArr.includes(key)) {
      outObj[key] = obj[key];
    }
  }
  return outObj;
};

/////////////////Finished
////////////////Secret Code: 400C2233
