/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let answer = 0;
  let currentGas = 0; // 当前剩余油量
  let minGapGas = Number.MAX_VALUE;
  for (let i = 0; i < gas.length; i++) {
    // 假如i作为起点到下个地点剩余的油
    const nextGas = gas[i] - cost[i]; // 有可能正；有可能负；找到最低点
    currentGas += nextGas;

    if (currentGas < 0 && currentGas < minGapGas) {
      answer = i === gas.length - 1 ? 0 : i + 1;
      minGapGas = currentGas;
    }
  }

  return currentGas >= 0 ? answer : -1;
}
// @lc code=end
