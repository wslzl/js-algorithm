const x = {
  a: "",
  b: 2,
};

const { a = "0" } = x;
console.log(a || 0);
