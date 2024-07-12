/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

function largestValues(root: TreeNode | null): number[] {
  const result: number[] = [];

  const traverse = (root: TreeNode | null, level: number) => {
    if (!root) return;
    result[level] = Math.max(result[level] ?? -Infinity, root.val);

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };

  traverse(root, 0);

  return result;
}
// @lc code=end
