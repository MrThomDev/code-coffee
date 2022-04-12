const arrayFlatten = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr[i] = arr[i].flat();
    }
  }
  return arr.flat();
};

////////////FINISHED
///////////Secret Code: E5B598CE
