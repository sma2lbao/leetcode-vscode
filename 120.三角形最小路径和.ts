/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const rows = triangle.length;
  const cols = triangle[rows - 1].length || 0;

  if (rows <= 1) {
    return triangle[rows - 1]?.[0];
  }

  let answer = Number.MAX_VALUE;

  const dp = Array.from({ length: rows }, () =>
    Array(cols).fill(Number.MAX_VALUE)
  );
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < triangle[row].length; col++) {
      if (row === 0) {
        dp[row][col] = triangle[row][col];
        continue;
      }

      dp[row][col] =
        triangle[row][col] +
        Math.min(dp[row - 1][col], dp[row - 1][col - 1] ?? Number.MAX_VALUE);

      if (row === rows - 1) {
        answer = Math.min(answer, dp[row][col]);
      }
    }
  }

  return answer;
}
// @lc code=end
