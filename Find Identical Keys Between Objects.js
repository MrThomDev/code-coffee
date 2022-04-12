const findIdenticalKvp = (obj1, obj2) => {
  const out = {};
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      out[key] = obj1[key];
    }
  }
  return out;
};

///////////////FINISHED
//////////////Secret Code: E8150280
