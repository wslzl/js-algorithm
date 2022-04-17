/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let result = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      l = map.get(s[i]) + 1;
    }
    result = Math.max(result, i - l + 1);
    map.set(s[i], i);
  }
  return result;
};

// Test
const s = "bbabbb";
const r = lengthOfLongestSubstring(s);
console.log(r);
