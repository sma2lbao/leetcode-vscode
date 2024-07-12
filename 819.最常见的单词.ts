/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  const words = paragraph
    .split(/[!?',;.\s]/)
    .filter((item) => !!item && banned.indexOf(item) === -1)
    .map((item) => item.toLowerCase());

  let answer = "";
  // 理想情况，全是同一个word

  const dp = (start: number): string => {};

  // 找到出现 len 次数的单词
  answer = dp(words.length);
  return answer;
}
// @lc code=end
