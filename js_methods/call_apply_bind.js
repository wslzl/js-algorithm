Function.prototype.myCall = function (obj, ...args) {
  const fn = Symbol();
  obj[fn] = this;
  const res = obj[fn](...args);
  delete obj[fn];
  return res;
};

Function.prototype.myApply = function (obj, args = []) {
  const fn = Symbol();
  obj[fn] = this;
  const res = args.length ? obj[fn](...args) : obj[fn]();
  delete obj[fn];
  return res;
};

Function.prototype.myBind = function (obj, ...args) {
  const fn = Symbol();
  obj[fn] = this; 
  return function () {
    const a = Array.prototype.slice.call(arguments);
    return obj[fn].apply(obj, [...args, ...a]);
  };
};

const obj1 = {
  a: 1,
  b: 2,
};

function test(x) {
  console.log(this.a, x);
}

test.myBind(obj1)(6);
