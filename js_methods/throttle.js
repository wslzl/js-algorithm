function throttle(fn, delay) {
  let flag = true;
  return () => {
    if (!flag) {
      return;
    }
    flag = false;
    timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}
