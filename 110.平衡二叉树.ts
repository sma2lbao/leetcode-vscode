/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  // 为避免树的高度增长过快，降低二叉排序树的性能，规定在插入和删除二叉树结点时，
  // 要保证任意结点的左、右子树高度差的绝对值不超过1，将这样的二叉树称为平衡二叉树(Balanced Binary Tree)，简称平衡树

  // 判断条件 左右子树高度不超过一，并且子树也需要满足平衡条件

  // 自底向上，用-1代表不是平衡树
  const findDeep = (root: TreeNode | null): number => {
    if (!root) return 0;
    const leftDeep = findDeep(root.left);
    const rightDeep = findDeep(root.right);
    // 子树不是平衡树时需要返回-1标识
    if (leftDeep === -1 || rightDeep === -1) return -1;
    // 判断自身
    if (Math.abs(leftDeep - rightDeep) > 1) return -1;
    return Math.max(leftDeep, rightDeep) + 1;
  };

  return findDeep(root) !== -1;
}
// @lc code=end
