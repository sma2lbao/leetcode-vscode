/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);
  const track: number[] = [];

  const backtrack = (choices: number[], track: number[], used: boolean[]) => {
    // 不能被选择时，代表值已确定
    if (nums.length === track.length) {
      result.push([...track]);
      return;
    }
    for (let i = 0; i < choices.length; i++) {
      if (used[i]) continue;

      track.push(choices[i]);
      used[i] = true;

      backtrack(choices, track, used);

      track.pop();
      used[i] = false;
    }
  };

  backtrack(nums, track, used);

  return result;
}
// @lc code=end
