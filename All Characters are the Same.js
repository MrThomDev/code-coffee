const allCharactersSame = (str) => {
  console.log(str);
  let boo = true;
  if (str.length === 0) {
    return true;
  }
  const mainStr = str[0];

  for (let i = 0; i < str.length; i++) {
    if (boo) {
      if (str[i] === mainStr) {
        boo = true;
      } else {
        boo = false;
      }
    } else {
      return boo;
    }
  }
  return boo;
};

/////Finished
///// Secret Code: 79879012
