const makeGrid = (n, value) => {
  // create variable for grid
  const grid = [];

  for (let i = 0; i < n; i++) {
    grid.push([]);

    for (let j = 0; j < n; j++) {
      grid[i].push(value);
    }
  }

  return grid;
};
