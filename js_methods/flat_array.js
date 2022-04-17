const arr = [1, [2, [3, [4, [5], 6], 7], 8], 9];

const flat1 = (arr) => {
  return arr.flat(Infinity);
};
const flat2 = (arr) => {
  return JSON.stringify(arr).replace(/\[|\]/g, "").split(",");
};
const flat3 = (arr) => {
  return JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");
};
const flat4 = (array) => {
  const fn = (arr) =>
    arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? fn(cur) : cur);
    }, []);

  return fn(array);
};
const flat5 = (array) => {
  const result = [];
  const fn = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? fn(arr[i]) : result.push(arr[i]);
    }
  };
  fn(array);
  return result;
};

console.log(flat1(arr));
console.log(flat2(arr));
console.log(flat3(arr));
console.log(flat4(arr));
console.log(flat5(arr));
