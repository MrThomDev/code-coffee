const christmasTree = (str, size) => {
  size = Number(size);
  console.log("-----------------New Test ------------------");
  console.log("String is: ", str, "Typeof Str:", typeof str, "Size:", size);
  if (str === "") {
    return "";
  }
  if (typeof str != "string") {
    return "";
  }
  if (size < 1) {
    return "";
  }
  const strR = `${str} `;
  const space = " ";
  let out = "";
  //Line
  for (let i = 1; i < size + 1; i++) {
    out += space.repeat(size - i);
    out += strR.repeat(i);
    out = out.slice(0, -1);
    out += `\n`;
  }
  out = out.slice(0, -1);
  console.log("OUTPUT: \n", out);
  return out;
};

//////////////////////////////////////////
//Mostly finished. Tests 2 and 5 have a bug. WAiting to here back.
