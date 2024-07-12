/*
 * @lc app=leetcode.cn id=1022 lang=typescript
 *
 * [1022] 从根到叶的二进制数之和
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

function sumRootToLeaf(root: TreeNode | null): number {
  let sum = 0;

  const backtrace = (root: TreeNode | null, parentSum: string) => {
    if (!root) return;
    const nextParentSum = parentSum + root.val;
    if (!root.left && !root.right) {
      const current = parseInt(nextParentSum, 2);
      sum += current;
      return;
    }

    backtrace(root.left, nextParentSum);
    backtrace(root.right, nextParentSum);
  };

  backtrace(root, "");

  return sum;
}
// @lc code=end
