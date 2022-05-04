/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }
  let i = -1;
  const kv = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  while (++i < len) {
    const c = s.charAt(i);
    if (["(", "[", "{"].includes(c)) {
      stack.push(c);
    } else {
      const b = stack.pop();
      if (c !== kv[b]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

const demo = "{([])}";
console.log(isValid(demo));
