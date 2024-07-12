/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
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

function countNodes(root: TreeNode | null): number {
  let sum = 0;
  let level = 0;
  // 只遍历最 left节点 和 最 right 节点
  const traverseLeft = (root: TreeNode | null) => {
    if (!root) return;
    level++;
    traverseLeft(root.left);
  };

  traverseLeft(root);

  const traverseRight = (root: TreeNode | null) => {
    if (!root) return;
    traverseRight(root.right);
  };

  return sum;
}
// @lc code=end
