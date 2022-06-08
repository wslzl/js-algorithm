/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const binary = (base, pow) => {
    if (pow === 0) {
      return 1;
    }
    const result = binary(base, Math.floor(pow / 2));
    return pow % 2 === 0 ? result * result : result * result * base;
  };
  return n > 0 ? binary(x, n) : binary(1 / x, n);
};

console.log(myPow(4, 5));
