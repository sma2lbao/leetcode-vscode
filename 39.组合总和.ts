/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const answer: number[][] = [];

  // 利用 start 减枝
  const backtrack = (choices: number[], track: number[], start: number) => {
    // 结束条件
    const trackSum = track.reduce((pervious, next) => pervious + next, 0);
    if (trackSum === target) {
      answer.push([...track]);
      return;
    }

    for (let i = start; i < choices.length; i++) {
      const value = choices[i];
      if (trackSum + value > target) continue;

      track.push(value);
      backtrack(choices, track, i);
      track.pop();
    }
  };
  candidates.sort();

  backtrack(candidates, [], 0);

  return answer;
}
// @lc code=end
