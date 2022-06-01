const insertSort = (arr = []) => {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    let j = i;
    const temp = result[i];
    while (j > 0 && result[j - 1] > temp) {
      result[j] = result[j - 1];
      j--;
    }
    result[j] = temp;
  }
  return result;
};

const arr = new Array(10).fill(null).map(() => {
  return Math.floor(Math.random() * 5 + 1);
});

console.log(arr);

console.log(insertSort(arr));
