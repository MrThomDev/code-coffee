const powerOfTwoCheck = (n) => {
  const posRecur = function (y) {
    console.log("Y is: ", y);
    if (y === 1) {
      return true;
    } else if (y < 1) {
      return false;
    } else {
      return posRecur(y / 2);
    }
  };

  const negRecur = function (y) {
    if (y === 1) {
      return true;
    } else if (y > 1) {
      return false;
    } else {
      return negRecur(y * 2);
    }
  };

  if (n < 0) {
    return false;
  }
  if (n > 0) {
    return posRecur(n);
  }

  if (n < 1 && n > 0) {
    return negRecur(n);
  }
};

////////NOT FINISHED!
