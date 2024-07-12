/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[0] = nums[0];
      continue;
    }
    if (i === 1) {
      dp[1] = Math.max(nums[0], nums[1]);
      continue;
    }

    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}
// @lc code=end
