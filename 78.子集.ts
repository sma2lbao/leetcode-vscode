/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const answer: number[][] = [[]];

  const backtrack = (choices: number[], track: number[]) => {
    if (track.length) {
      answer.push([...track]);
    }

    for (let i = 0; i < choices.length; i++) {
      const value = choices[i];
      // TODO 需要优化，不直接操作数组，可以使用标记位
      const nextChoices = choices.slice(i + 1);

      track.push(value);
      backtrack(nextChoices, track);
      track.pop();
    }
  };

  backtrack(nums, []);

  return answer;
}
// @lc code=end
