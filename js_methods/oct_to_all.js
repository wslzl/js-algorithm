const octToAll = (val, base = 2) => {
  const res = [];
  let v = val;
  while (v) {
    res.push(v % base);
    v = Math.floor(v / base);
  }
  return res.reverse().join("");
};

console.log(octToAll(2));
