/*
 * @lc app=leetcode.cn id=1046 lang=typescript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
function lastStoneWeight(stones: number[]): number {
  let most = Math.max(stones[0], stones[1]);
  let second = Math.min(stones[0], stones[1]);
  while (most || second) {}
}
// @lc code=end
