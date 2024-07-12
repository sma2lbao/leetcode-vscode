/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  const traverse = (root: TreeNode | null, level: number) => {
    if (!root) return;
    result[level] ? result[level].push(root.val) : (result[level] = [root.val]);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };
  traverse(root, 0);

  return result;
}
// @lc code=end
