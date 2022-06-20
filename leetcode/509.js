/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var fib1 = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib1(n - 1) + fib1(n - 2);
};

console.log(fib(16));
console.log(fib1(16));
