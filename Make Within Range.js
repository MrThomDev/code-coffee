const makeWithinRange = (a, b) => {
  const out = [];

  if (a === b) {
    return [a];
  }

  if (a < b) {
    for (let i = a; i <= b; i++) {
      out.push(i);
    }
    return out;
  } else {
    for (let i = b; i <= a; i++) {
      out.push(i);
    }
    return out;
  }
};

/////////Finished
/////////Secret Code: D75F3FC5
