/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const answer: number[][] = [];
  const used: boolean[] = new Array(candidates.length).fill(false);

  // 回溯

  const backtrack = (
    choices: number[],
    track: number[],
    sum: number,
    start: number
  ) => {
    if (target === sum) {
      answer.push([...track]);
      return;
    }

    // 先排序，利用start 来剪枝；
    for (let i = start; i < choices.length; i++) {
      // 与上一个值相同时，如果上一个没有用到，则需要过滤，只有相同的上一个存在时，才需要判断，否则就是重复计算
      if (used[i] || (choices[i - 1] === choices[i] && !used[i - 1])) continue;
      const value = choices[i];
      if (value + sum > target) continue;

      track.push(value);
      used[i] = true;

      backtrack(choices, track, sum + value, i);

      track.pop();
      used[i] = false;
    }
  };

  candidates.sort();

  backtrack(candidates, [], 0, 0);
  return answer;
}
// @lc code=end
