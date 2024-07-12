/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  // n x n 棋盘
  const choices: string[][] = Array.from({ length: n }, () =>
    Array(n).fill(".")
  );

  const isVaild = (choices: string[][], row: number, col: number) => {
    var n = choices.length;
    // 检查列是否有皇后互相冲突
    for (var i = 0; i < n; i++) {
      if (choices[i][col] === "Q") {
        return false;
      }
    }
    // 检查右上方是否有皇后互相冲突
    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (choices[i][j] === "Q") {
        return false;
      }
    }
    // 检查左上方是否有皇后互相冲突
    for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (choices[i][j] === "Q") {
        return false;
      }
    }
    return true;
  };

  const backtrack = (choices: string[][], row: number) => {
    if (row === n) {
      // 遍历完最后一行
      // 结束条件
      const rows = choices.map((item) => item.join(""));
      result.push(JSON.parse(JSON.stringify(rows)));
      return;
    }
    const cols = choices[row].length;
    for (let col = 0; col < cols; col++) {
      if (!isVaild(choices, row, col)) continue;

      choices[row][col] = "Q";
      backtrack(choices, row + 1);
      choices[row][col] = ".";
    }
  };

  // 逐行遍历
  backtrack(choices, 0);

  return result;
}
// @lc code=end
