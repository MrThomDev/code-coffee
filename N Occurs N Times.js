const nOccursNTimes = (n, values) => {
  const count = {};
  count[n] = 0;

  for (el of values) {
    if (el === n) {
      count[n] += 1;
    }
  }

  if (count[n] === n) {
    return true;
  } else {
    return false;
  }
};

///////////Finished
//////////Secret Code: F79C183A
