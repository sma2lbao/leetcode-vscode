/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const answer: number[][] = [];

  const backtrack = (choice: number, track: number[], start: number) => {
    if (track.length === k) {
      answer.push([...track]);
      return;
    }

    for (let val = start; val <= choice; val++) {
      track.push(val);
      backtrack(choice, track, val + 1);
      track.pop();
    }
  };

  backtrack(n, [], 1);

  return answer;
}
// @lc code=end
