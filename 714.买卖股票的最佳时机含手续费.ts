/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  // 每天选择持有或这个不持有
  let answer = 0; // 不持有
  let hold = -prices[0]; // 持有收益

  for (let i = 1; i < prices.length; i++) {
    // 不持有；含 1：卖出；2：本身就没有
    const currentPrice = prices[i];
    answer = Math.max(answer, currentPrice + hold - fee);
    // 持有; 含 1：本来就持有 ； 2：买入
    hold = Math.max(hold, answer - currentPrice);
  }

  return answer;
}
// @lc code=end
