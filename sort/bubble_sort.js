const bubbleSort = (arr) => {
  const result = [...arr];
  const len = result.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
      console.log(result.join(","));
    }
  }
  return result;
};

const arr = [4, 6, 1, 7, 2, 8, 9, 3, 5];

console.log(arr);

console.log(bubbleSort(arr));
