/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;

  const dummy = new ListNode(undefined, head);
  let slow: ListNode | null = dummy; // 始终慢两步
  let fast = dummy.next?.next;

  while (fast) {
    const pervious = slow!.next;
    pervious!.next = fast.next;
    slow!.next = fast;
    fast.next = pervious;

    fast = fast.next?.next?.next; // 由于交互了位置，需要走三步
    slow = slow!.next.next;
  }

  return dummy.next;
}
// @lc code=end
