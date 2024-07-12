/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  const traverse = (root: TreeNode | null, level: number) => {
    if (!root) return;
    const isOdd = level % 2 === 0; // 当前行是否偶数 （偶数行正常左->右）
    if (result[level]) {
      isOdd ? result[level].push(root.val) : result[level].unshift(root.val);
    } else {
      result[level] = [root.val];
    }
    // 下一行跟当前行相反
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };
  traverse(root, 0);
  return result;
}
// @lc code=end
