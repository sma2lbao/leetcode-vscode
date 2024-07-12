/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N 皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
  let answer = 0;
  // 构建棋盘
  const choices: string[][] = Array.from({ length: n }, () =>
    Array(n).fill(".")
  );

  const backtrack = (choices: string[][], row: number) => {
    if (row === n) {
      // 存在解
      answer++;
    }

    const cols = n;
    for (let col = 0; col < cols; col++) {
      if (!isVaild(choices, row, col)) continue;

      // 满足条件
      choices[row][col] = "Q";
      // 向下层继续判断
      backtrack(choices, row + 1);
      //   还原，后序位置；代表当前条件的行当前列已遍历，继续判断下一位置
      choices[row][col] = ".";
    }
  };

  // row 从小到大判断，因此只需判断当前row的上方是否满足条件
  const isVaild = (choices: string[][], row: number, col: number) => {
    // 当前列
    for (let r = 0; r < row; r++) {
      if (choices[r][col] === "Q") return false;
    }
    // 左上
    for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
      if (choices[r][c] === "Q") return false;
    }
    // 右上
    for (let r = row - 1, c = col + 1; r >= 0 && c < choices.length; r--, c++) {
      if (choices[r][c] === "Q") return false;
    }
    return true;
  };

  backtrack(choices, 0);

  return answer;
}
// @lc code=end
