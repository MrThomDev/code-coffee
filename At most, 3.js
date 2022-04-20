const atMostThree = (str) => {
  const strArr = str.split("");
  let outStr = "";
  const objTrack = {};
  for (let letter of strArr) {
    if (objTrack[letter]) {
      objTrack[letter] += 1;
    } else {
      objTrack[letter] = 1;
    }
    if (objTrack[letter] <= 3) {
      outStr += letter;
    }
  }
  return outStr;
};

/////////////////////Finished
////////////////////Secret Code: 818C8264
