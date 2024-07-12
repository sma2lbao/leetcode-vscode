/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0]?.length || 0;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(-1));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value = grid[row][col];
      if (row === col && row === 0) {
        // 基础值
        dp[row][col] = value;
        continue;
      }
      if (row === 0) {
        // 第一行 只能从左向右加
        dp[row][col] = dp[row][col - 1] + value;
        continue;
      }
      if (col === 0) {
        // 第一列 只能从上往下加
        dp[row][col] = dp[row - 1][col] + value;
        continue;
      }

      dp[row][col] = Math.min(dp[row][col - 1], dp[row - 1][col]) + value;
    }
  }
  return dp[rows - 1][cols - 1];
}
// @lc code=end
