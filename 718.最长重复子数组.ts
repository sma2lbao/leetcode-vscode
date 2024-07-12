/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  const dp = Array.from({ length: nums1.length + 1 }, () =>
    new Array(nums2.length + 1).fill(0)
  );
  let answer = 0;
  //   倒序是为了方便计算，如果从0开始遍历需要保证dp[i-1]存在
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
      answer = Math.max(answer, dp[i][j]);
    }
  }

  return answer;
}
// @lc code=end
