/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    const b = target - a;
    if (obj[a] !== undefined) {
      result = [obj[a], i];
      break;
    } else {
      obj[b] = i;
    }
  }
  return result;
};

var nums = [2, 7, 11, 15];
let result = twoSum(nums, 9);
console.log(result);
