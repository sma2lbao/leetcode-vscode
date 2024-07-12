/*
 * @lc app=leetcode.cn id=877 lang=typescript
 *
 * [877] 石子游戏
 */

// @lc code=start
function stoneGame(piles: number[]): boolean {
  const dp = new Array(piles.length).fill(-1);
  let total = 0;
  for (let i = 0; i < piles.length; i++) {
    total += piles[i];
    if (i === 0) {
      dp[i] = piles[i];
      continue;
    }

    if (i === 1) {
      dp[1] = Math.max(piles[0], piles[1]);
      continue;
    }

    dp[i] = Math.max(dp[i - 2] + piles[i], dp[i - 1]);
  }
  return dp[piles.length - 1] > total / 2;
}
// @lc code=end
