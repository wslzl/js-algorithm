/**
 * 复原IP地址
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const back = (str, sub, index) => {
    if (index === 4 && str.length === 0) {
      res.push(sub.slice(1));
    }
    if (index === 4 || str.length === 0) {
      return;
    }
    back(str.slice(1), `${sub}.${str.slice(0, 1)}`, index + 1);
    if (str.length > 1 && str[0] !== "0") {
      back(str.slice(2), `${sub}.${str.slice(0, 2)}`, index + 1);
      if (str.length > 2 && parseInt(str.slice(0, 3)) <= 255) {
        back(str.slice(3), `${sub}.${str.slice(0, 3)}`, index + 1);
      }
    }
  };
  back(s, "", 0);
  return res;
};

const s = "25525511135";
const r = restoreIpAddresses(s);
console.log(r.join(","));
