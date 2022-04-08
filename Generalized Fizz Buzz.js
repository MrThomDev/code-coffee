const generalizedFizzBuzz = (n, f, b) => {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % f === 0 && i % b === 0) {
      out.push("FizzBuzz");
    } else if (i % f === 0) {
      out.push("Fizz");
    } else if (i % b === 0) {
      out.push("Buzz");
    } else {
      out.push(i);
    }
  }
  return out;
};

////////////Finished
////////////Secret Code: A2475E56
