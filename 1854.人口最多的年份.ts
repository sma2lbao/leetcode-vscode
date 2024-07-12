/*
 * @lc app=leetcode.cn id=1854 lang=typescript
 *
 * [1854] 人口最多的年份
 */

// @lc code=start
function maximumPopulation(logs: number[][]): number {
  logs.sort((prev, next) => prev[0] - next[0]);

  console.log(logs);

  let maximum = 1;

  let prevPerson = 0;
  let maximumYear = logs[0][0];

  for (let i = 1; i < logs.length; i++) {
    const [curBirth, curDeath] = logs[i];
    const [prevBirch, prevDeath] = logs[prevPerson];
    if (curBirth >= prevDeath) {
      prevPerson = i;
    } else {
      const temp = i - prevPerson + 1;
      if (temp > maximum) {
        maximum = temp;
        maximumYear = curBirth;
      }
    }
  }

  return maximumYear;
}
// @lc code=end
