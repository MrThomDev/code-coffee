const powerOfTwoCheck = (n) => {
  if (n < 1) {
    return false;
  }
  if (n > 1) {
    return powerOfTwoCheck(n / 2);
  } else if (n === 1) {
    return true;
  }
};

////////Finished
///////Secret Code: C4ACE267
