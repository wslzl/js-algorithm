const debounce = (fn, wait = 0) => {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  let timeout = null;
  return function () {};
};
