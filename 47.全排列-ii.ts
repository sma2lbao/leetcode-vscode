/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const answer: number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  const backtrack = (choice: number[], track: number[]) => {
    if (track.length === nums.length) {
      answer.push([...track]);
      return;
    }

    for (let i = 0; i < choice.length; i++) {
      const value = choice[i];

      // 再遍历时需要去除上层以存在的组合
      if (used[i] || (i > 0 && choice[i] === choice[i - 1] && used[i - 1]))
        continue;

      track.push(value);
      used[i] = true;

      backtrack(choice, track);

      track.pop();
      used[i] = false;
    }
  };

  // 原地排序
  nums.sort();
  backtrack(nums, []);
  return answer;
}
// @lc code=end
