const chunk = (array, count) => {
  let i = 0;
  const len = array.length;
  const result = [];
  while (i < len) {
    result.push(array.slice(i, (i += count)));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const x = chunk(arr,3)
console.log(x)