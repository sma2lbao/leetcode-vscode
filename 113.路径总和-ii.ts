/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];
  // 思路：遍历时根据和的值动态减少，到叶子节点后判断是否满足，满足的话标记并在后序遍历加入到结果里
  const result: number[][] = [];

  const traverse = (root: TreeNode | null, sum: number): number[] => {
    if (!root) return [];
    if (!root.left && !root.right) {
      // 叶子节点 - 给标记即返回数组位置
      if (root.val === sum) {
        // 满足条件
        result.push([root.val]);
        return [result.length - 1];
      } else {
        return [];
      }
    }
    // 有可能都满足
    const leftIndexs = traverse(root.left, sum - root.val);
    const rightIndexs = traverse(root.right, sum - root.val);
    const array = [...leftIndexs, ...rightIndexs];
    if (array.length) {
      array.forEach((pos) => {
        result[pos].unshift(root.val);
      });
    }
    return array;
  };
  traverse(root, targetSum);
  return result;
}
// @lc code=end
