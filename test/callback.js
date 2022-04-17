const callback = (val) => {
  return val ** 2;
};

function demo(callback, data) {
  const result = callback(data);
}
