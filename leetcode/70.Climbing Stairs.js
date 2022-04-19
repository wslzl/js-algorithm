/**
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var climbStairs2 = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }
  return climbStairs2(n - 1) + climbStairs2(n - 2);
};
