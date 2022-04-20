const firstUniqueLetter = (word) => {
  for (let letter of word) {
    let regEx = new RegExp(`${letter}`, "gim");
    let arr = word.match(regEx);
    if (arr.length === 1) {
      return letter.toLowerCase();
    }
    console.log(arr);
  }
  return "";
};

///////////////////Finished
//////////////////Secret Code: 6FE1CC90
