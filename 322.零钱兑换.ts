/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(-1);

  for (let i = 0; i <= amount; i++) {
    if (i === 0) {
      dp[i] = i;
      continue;
    }
    let minCountSelect = Infinity;
    for (let coin of coins) {
      if (i - coin < 0) continue;
      minCountSelect = Math.min(minCountSelect, dp[i - coin]);
    }
    dp[i] = minCountSelect + 1;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
// @lc code=end
