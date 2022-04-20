const findTheDifferentLetter = (str1, str2) => {
  let test1 = str1;
  let test2 = str2;

  if (str1.length > str2.length) {
    for (let el of str2) {
      test1 = test1.replace(el, "");
    }
    return test1;
  } else {
    for (let el of str1) {
      test2 = test2.replace(el, "");
    }
    return test2;
  }
};

///////////////////Finished
//////////////////Secret Code: D1E97FFE
