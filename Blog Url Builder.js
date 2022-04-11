const blogUrl = (title) => {
  title = title.toLowerCase().trim().replaceAll(" ", "-");
  const puncReg = /[!@#$%^&*,.?;']/gim;
  title = title.replaceAll(puncReg, "");
  if (title.length > 60) {
    title = title.slice(0, 60);
  }
  return title;
};

////////Finsihed
////////Secret Code: 22193FA5
