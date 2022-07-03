function* genToAsync() {
  return yield promiseFunc();
}

function promiseFunc() {
  return new Promise((resolve, reject) => {});
}
