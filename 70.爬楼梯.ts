/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const memo = new Array(n + 1);

  const dp = (steps: number) => {
    if (steps === 1) return 1;
    if (steps === 2) return 2;

    if (memo[steps]) return memo[steps];

    let count = 0;
    for (const step of [1, 2]) {
      count += dp(steps - step);
    }
    memo[steps] = count;
    return count;
  };

  return dp(n);
}
// @lc code=end
