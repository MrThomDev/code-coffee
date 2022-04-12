const deepSplit = (strings, sep) => {
  const out = [];
  for (el of strings) {
    out.push(el.split(sep));
  }
  return out.flat();
};

/////////////Finished
////////////Secret Code: D3789041
