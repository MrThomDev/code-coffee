const alphaCountBack = (letter) => {
  let alphBack = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  alphBack = alphBack.reverse();
  if (letter === letter.toUpperCase()) {
    let index = alphBack.indexOf(letter.toLowerCase());
    let out = alphBack.slice(index);
    out = out.join("").toUpperCase();
    return out;
  } else {
    let index = alphBack.indexOf(letter.toLowerCase());
    let out = alphBack.slice(index);
    return out.join("");
  }
};

/////////Finished
////////Secret Code: B7659E13
