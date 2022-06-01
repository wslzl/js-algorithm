const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const result = [...arr];
  const pivot = Math.floor(result.length / 2);
  const pivotVal = result.splice(pivot, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < result.length; i++) {
    result[i] > pivotVal ? right.push(result[i]) : left.push(result[i]);
  }
  return quickSort(left).concat(pivotVal, quickSort(right));
};

const arr = [4, 6, 1, 7, 2, 8, 9, 3, 5];

console.log(quickSort(arr));
