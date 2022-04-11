const swapAdjacentPairs = (arr) => {
  const out = [];

  for (let i = 0; i < arr.length; i += 2) {
    let swap = arr.slice(i, i + 2);
    swap.reverse();
    out.push(swap);
  }
  return out.flat();
};

/////////////////Finished
/////////////////Secret Code: BD831411
