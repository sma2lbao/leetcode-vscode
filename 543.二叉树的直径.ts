/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 使用分解方式（即有返回值）
  const findMaxCount = (root: TreeNode | null): number => {
    if (!root) return 0;
    const leftMax = findMaxCount(root.left);
    const rightMax = findMaxCount(root.right);
    return Math.max(leftMax, rightMax) + 1;
  };

  return findMaxCount(root);
}
// @lc code=end
