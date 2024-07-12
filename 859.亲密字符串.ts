/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }
  const indexArray: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const goalChar = goal[i];
    if (sChar !== goalChar) {
      indexArray.push(i);
      // 存在2处以上必定不是
      if (indexArray.length > 2) {
        return false;
      }
    }
  }
  if (indexArray.length === 2 && s[indexArray[0]] === goal[indexArray[1]]) {
    return true;
  }
  if (indexArray.length === 0 && s.length > 1) {
    return true;
  }
  return false;
}
// @lc code=end
