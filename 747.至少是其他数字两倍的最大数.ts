/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  // dp[i] 代表 nums[0] 到 num[i]满足条件的index
  const dp = new Array(nums.length + 1).fill(-1);

  let answer = -1;
  let max;
  let secondMax;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (max != null) {
      if (value > max) {
        secondMax = max;
        max = value;
      }
    } else {
      max = value;
    }
    if (secondMax != null && max >= secondMax * 2) {
      dp[i] = max === value ? i : answer;
    }
    answer = dp[i];
  }

  return answer;
}
// @lc code=end
