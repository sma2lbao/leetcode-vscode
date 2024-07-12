/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  const cache = new Map<number, number[]>();
  const traverse = (root: TreeNode | null, level: number) => {
    if (!root) return;
    if (!cache.has(level)) {
      cache.set(level, []);
    }
    const array = cache.get(level)!;
    array.push(root.val);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };
  traverse(root, 0);
  cache.forEach((children) => {
    result.unshift(children);
  });
  return result;
}
// @lc code=end
