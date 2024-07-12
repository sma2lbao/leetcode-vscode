/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
  const cache = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    cache.has(num) ? cache.set(num, cache.get(num)! + 1) : cache.set(num, 1);
  }
  const tempArray: number[] = [];
  let result = true;
  cache.forEach((value: number) => {
    if (tempArray.indexOf(value) !== -1) {
      result = false;
      return;
    } else {
      tempArray.push(value);
    }
  });
  return result;
}
// @lc code=end
