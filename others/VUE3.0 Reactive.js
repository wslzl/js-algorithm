const data = {
  x: 1,
};

const p = new Proxy(data, {
  get() {},
  set(target, propKey, value) {
    console.log({ target, propKey, value });
  },
});

p.name = "xyz";
console.log(data);
