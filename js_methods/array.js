Array.prototype.myFilter = function (callback, atgs) {
  if (this === null) {
    throw new TypeError("this is null");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  const obj = this;
  let res = [];
  for (let i = 0; i < obj.length; i++) {
    if (callback(obj[i], i)) {
      res.push(obj[i]);
    }
  }
  return res;
};

Array.prototype.myForEach = function (callback, thisArgs) {
  if (this === null) {
    throw new TypeError("this is null");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  const array = this;
  let index = 0;
  while (index < array.length) {
    callback.call(thisArgs, array[index], index, array);
    index++;
  }
};

Array.prototype.myMap = function (callback, thisArgs) {
  if (this === null) {
    throw new TypeError("this is null");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + "is not a function");
  }
  const array = this;
  const ret = [];
  for (let i = 0; i < array.length; i++) {
    ret[i] = callback.call(thisArgs, array[i], i, array);
  }
  return ret;
};

const arr = [{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }];
const res = arr.myMap((item, index) => {
  return item.x;
});
console.log(res);
