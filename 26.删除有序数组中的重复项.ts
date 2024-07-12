/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let cur = 1;
  while (cur <= nums.length) {
    let prev = cur - 1;
    if (nums[prev] === nums[cur]) {
      nums.splice(cur, 1);
      continue;
    }
    cur++;
  }
  return nums.length;
}
// @lc code=end
