/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let result = [];
  const map = new Map();
  for (const c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  for (let r = 0; r < s.length; r++) {}
};
