const evenOddSplitter = (arr) => {
  const out = [];
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  out.push(odd);
  out.push(even);
  return out;
};

////////////Finished
////////////Secret Code: D3BB230B
