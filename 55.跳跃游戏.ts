/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let answer = true;

  let current = 0; // 起始位置
  while (current < nums.length - 1) {
    if (nums[current] === 0) {
      return false;
    }
    let maxStepCountIndex = current;
    for (let i = current; i <= current + nums[current]; i++) {
      const maxStepCount = nums[maxStepCountIndex];
      if (nums[i] >= maxStepCount) {
        maxStepCountIndex = i;
      }
    }
    current = maxStepCountIndex + nums[maxStepCountIndex];
  }

  return answer;
}
// @lc code=end
