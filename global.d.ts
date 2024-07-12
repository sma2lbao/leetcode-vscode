declare global {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null): ListNode;
  }

  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(
      val?: number,
      left?: TreeNode | null,
      right?: TreeNode | null
    ): TreeNode;
  }
}

export {};
