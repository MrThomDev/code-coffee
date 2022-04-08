const allUppercase = (str) => {
  const regEx = /[ !@#$%^&*()_+~:";',.<>/?|]/gim;
  if (regEx.test(str)) {
    return false;
  }
  let boo = true;
  for (let i = 0; i < str.length; i++) {
    if (boo) {
      boo = str[i] === str[i].toUpperCase();
    } else {
      return boo;
    }
  }
  return boo;
};

//////FINISHED
//////Secret Code: C90B83A4
