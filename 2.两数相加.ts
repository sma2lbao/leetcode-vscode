/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let point = dummy;
  let hasCarry = false;
  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0);
    if (hasCarry) {
      sum += 1;
    }
    // reset
    hasCarry = sum > 9;
    const val = sum % 10;
    point.next = new ListNode(val);
    point = point.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  if (hasCarry) {
    point.next = new ListNode(1);
  }
  return dummy.next;
}
// @lc code=end
