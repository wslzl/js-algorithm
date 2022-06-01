const selectSort = (arr) => {
  const result = [...arr];
  const len = result.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (result[minIndex] > result[j]) {
        minIndex = j;
      }
    }
    [result[i], result[minIndex]] = [result[minIndex], result[i]];
  }
  return result;
};

const arr = [4, 6, 1, 7, 2, 8, 9, 3, 5];

console.log(selectSort(arr));
