/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 上升就买 下降时再卖； 净利润为0时继续持有
  // let answer = 0;
  // let perviousPrice = prices[0];
  // for (let i = 1; i < prices.length; i++) {
  //   const currentPrice = prices[i];
  //   const nextPrice = prices[i + 1] ?? Number.MIN_VALUE;
  //   const profit = currentPrice - perviousPrice;
  //   if (currentPrice >= nextPrice && profit > 0) {
  //     // 马上下跌
  //     answer += profit;
  //     // 指定下一个买进
  //     if (i === prices.length - 1) {
  //       // 到最后一个了
  //       break;
  //     }
  //     perviousPrice = nextPrice;
  //   } else {
  //     // 继续持有
  //     perviousPrice = Math.min(perviousPrice, currentPrice);
  //   }
  // }

  // return answer;

  // 每天选择持有或这个不持有
  let answer = 0; // 不持有
  let hold = -prices[0]; // 持有收益

  for (let i = 1; i < prices.length; i++) {
    // 不持有；含 1：卖出；2：本身就没有
    const currentPrice = prices[i];
    answer = Math.max(answer, currentPrice + hold);
    // 持有; 含 1：本来就持有 ； 2：买入
    hold = Math.max(hold, answer - currentPrice);
  }

  return answer;
}
// @lc code=end
