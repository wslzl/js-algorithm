/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k <= 1) {
    return [];
  }
  const res = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    const max = Math.max(...nums.slice(i, i + k));
    res.push(max);
  }
  return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const r = maxSlidingWindow(nums, k);
console.log(r);
