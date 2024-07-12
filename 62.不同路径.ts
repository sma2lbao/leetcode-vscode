/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      if (r <= 1 || c <= 1) {
        // 只有一行或者一列时只有一种走法
        dp[r][c] = 1;
        continue;
      }

      //   到 r c 位置；只能从 上（r-1 c）或者 左 (r c-1)到达；即到 r c位置的走法取决于 到 上 和 到左的走法
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[m][n];
}
// @lc code=end
