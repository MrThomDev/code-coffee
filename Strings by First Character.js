const stringByFirstChar = (strings) => {
  const outObj = {};
  for (str of strings) {
    console.log(str);
    let key = str[0];
    if (outObj[key]) {
      outObj[[key]].push(str);
    } else {
      outObj[key] = [str];
    }
  }
  return outObj;
};

//////////////////////Finished
/////////////////////Secret Code: 37887A6D
