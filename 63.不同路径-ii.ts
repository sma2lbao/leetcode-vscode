/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0]?.length || 0;

  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (obstacleGrid[row][col] === 1) {
        // 有石头 永远到不了；
        dp[row][col] = 0;
        continue;
      }
      if (row === 0 && col === 0) {
        // 基础值
        dp[row][col] = 1;
        continue;
      }
      if (row === 0) {
        // 第一行 没有上边的路径 只有左边的路径
        dp[row][col] = Math.min(dp[row][col - 1], 1);
        continue;
      }
      if (col === 0) {
        // 第一列 没有左边的路径 只有上边的路径
        dp[row][col] = Math.min(dp[row - 1][col], 1);
        continue;
      }

      const left = dp[row][col - 1];
      const top = dp[row - 1][col];
      dp[row][col] = left + top;
    }
  }

  return dp[rows - 1][cols - 1];
}
// @lc code=end
