const christmasTree = (str, size) => {
  let out = "";
  console.log("Inputed string: ", str);
  const modStr = str + " ";
  for (let i = 1; i < size; i++) {
    for (let j = 0; j < i; j++) {
      out.concat(`${modStr}\n`);
    }
    out.trim();
  }
  console.log(out);
  return out;
};

////////////////    NOT FINISHED!!!!  /////////////////////////////////
//////////////// Might be a good for a recursion solution
