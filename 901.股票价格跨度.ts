/*
 * @lc app=leetcode.cn id=901 lang=typescript
 *
 * [901] 股票价格跨度
 */

// @lc code=start
class StockSpanner {
  prices: number[] = [];

  constructor() {}

  next(price: number): number {
    this.prices.push(price);
    const currentIndex = this.prices.length - 1;
    let answer = 0;
    for (let i = currentIndex; i >= 0; i--) {
      // TODO 优化点：将跨度值也存起来；满足条件是减少跨度值，减少判断次数
      if (this.prices[i] <= price) {
        answer++;
      } else {
        break;
      }
    }
    return answer;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
