const deepClone = (value) => {
  const isObj = (value) => {
    const type = typeof value;
    return value !== null && (type === "object" || type === "function");
  };
  const clone = (v) => {
    if (!isObj(v)) {
      return v;
    }
    if (v instanceof Date || v instanceof RegExp) {
      return new v.constructor(v);
    }
    if (typeof v === "function") {
    }
    if (typeof v === "symbol") {
      return Object(Symbol.prototype.valueOf.call(v));
    }
    if (Array.isArray(v)) {
      const len = v.length;
      const result = [];
      let i = -1;
      while (++i < len) {
        result[i] = clone(v);
      }
      return result;
    } else {
      const result = {};
      for (const key in v) {
        result[key] = clone(v[key]);
      }
      return result;
    }
  };
  if (!isObj(value)) {
    return value;
  }
  let result = Array.isArray(value) ? [] : {};
  const keys = Reflect.ownKeys(value);
  keys.forEach((key) => {
    const val = value[key];
    result[key] = clone(val);
  });
  return result;
};

const demo = {
  name: "demo",
  obj: {
    x: 1,
    y: 2,
  },
};

const demoCopy = deepClone(demo);
demo.obj.x = 99;
console.log(demo.obj.x);
console.log(demoCopy.obj.x);
