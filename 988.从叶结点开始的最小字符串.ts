/*
 * @lc app=leetcode.cn id=988 lang=typescript
 *
 * [988] 从叶结点开始的最小字符串
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

function smallestFromLeaf(root: TreeNode | null): string {
  const str = "abcdefghijklmnopqrstuvwxyz";
  let result: string = ""; // 转换成字母
  //   遍历，找到叶子节点，并将从root 到 叶子节点的值通过数组向下传递
  const traverse = (root: TreeNode | null, previousString: string) => {
    if (!root) return;
    const current = str[root.val] + previousString;
    if (!root?.left && !root?.right) {
      if (!result) {
        result = current;
      } else {
        result = result < current ? result : current;
      }
    }

    traverse(root.left, current);
    traverse(root.right, current);
  };

  traverse(root, "");
  return result;
}
// @lc code=end
