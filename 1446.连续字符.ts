/*
 * @lc app=leetcode.cn id=1446 lang=typescript
 *
 * [1446] 连续字符
 */

// @lc code=start
function maxPower(s: string): number {
  if (!s.length) {
    return 0;
  }
  let maxLen = 1;
  let prevIndex = 0;
  for (let i = 1; i < s.length; i++) {
    const curr = s[i];
    const prev = s[prevIndex];
    if (curr != prev) {
      prevIndex = i;
    } else {
      maxLen = Math.max(maxLen, i - prevIndex + 1);
    }
  }
  return maxLen;
}
// @lc code=end
