const giftOptions = {
  1: ["first", "a partridge in a pear tree"],
  2: ["second", "two turtle doves"],
  3: ["third", "three french hens"],
  4: ["fourth", "four calling birds"],
  5: ["fifth", "five gold rings"],
  6: ["sixth", "six geese a-laying"],
  7: ["seventh", "seven swans a-swimming"],
  8: ["eighth", "eight maids a-milking"],
  9: ["ninth", "nine ladies dancing"],
  10: ["tenth", "ten lords a-leaping"],
  11: ["eleventh", "eleven pipers piping"],
  12: ["twelfth", "twelve drummers drumming"],
};

const christmasSong = () => {
  const verseGen = function (day, option) {
    const out = `On the ${day} day of Christmas, my true love gave to me: ${option}`;
    return out;
  };

  let outArr = [];

  for (let key in giftOptions) {
    let [day, gift] = giftOptions[key];
    if (key > 1) {
      let curVerse =
        verseGen(day, gift) +
        `,${outArr[key - 2].slice(outArr[key - 2].indexOf(":") + 1)}`;
      curVerse = curVerse.replace(
        ", a partridge in a pear tree.",
        ", and a partridge in a pear tree."
      );
      outArr.push(curVerse);
    } else {
      outArr.push(verseGen(day, gift) + ".");
    }
  }
  console.log(outArr[0]);
  return outArr;
};
