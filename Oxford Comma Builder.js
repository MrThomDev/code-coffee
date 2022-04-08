const oxfordCommaBuilder = (arr, includeOxfordComma) => {
  if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`;
  }
  const startArr = arr.slice(0, -1);

  if (includeOxfordComma) {
    const out = startArr.concat([`and ${arr.slice(-1)}`]);
    return out.join(", ");
  } else {
    return startArr.join(", ") + ` and ${arr.slice(-1)}`;
  }
};

/////////////Finished
//           Secret Code: 24D8C71A
