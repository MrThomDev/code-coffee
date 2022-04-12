const fourFuncMathCalc = (a, b, op) => {
  const operator = {
    ADD: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
    MULTIPLY: (a, b) => a * b,
    DIVIDE: (a, b) => a / b,
  };

  return operator[op](a, b);
};

////////////////FINISHED
////////////////Secret Code: 3C732093
