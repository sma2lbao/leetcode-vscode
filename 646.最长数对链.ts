/*
 * @lc app=leetcode.cn id=646 lang=typescript
 *
 * [646] 最长数对链
 */

// @lc code=start
function findLongestChain(pairs: number[][]): number {
  pairs.sort((pervious, next) => pervious[0] - next[0]);

  const dp = (pairs: number[][]): number => {
    if (pairs.length === 0) return 0;
    if (pairs.length === 1) return 1;

    let answer = 0;

    for (let i = pairs.length - 1; i > 0; i--) {
      const current = pairs[i];
      const pervious = pairs[i - 1];
      answer = dp(pairs.slice(0, i));
      if (current[0] > pervious[1]) {
        answer = answer + 1;
      }
    }
    return answer;
  };

  return dp(pairs);
}
// @lc code=end
