const unique1 = (arr) => {
  return Array.from(new Set(arr));
};

const unique2 = (array) => {
  const arr = JSON.parse(JSON.stringify(array));
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        len -= 1;
        j -= 1;
      }
    }
  }
  return arr;
};

const arr = [1, "1", "a", 1, "b"];
console.log(unique1(arr));
