const minMaxNumScraper = (strOfNums) => {
  const numArr = strOfNums.split(" ");
  const out = [];
  out.push(Math.min(...numArr));
  out.push(Math.max(...numArr));
  return out;
};

////////Finished
////////Secret Code: FD598D0C
