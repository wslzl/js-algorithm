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

Array.prototype.myReduce = function (callback, val) {
  if (this === null) {
    throw new Error("this is null");
  }
  let result = val || val === 0 ? val : this[0];
  this.forEach((item, index) => {
    result = callback(result, item, index);
  });
  return result;
};

const arr = [{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }];
const res = arr.myReduce((prev, curr) => {
  return prev + curr.x;
}, 0);
console.log(res);
