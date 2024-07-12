/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;
  // 用快慢指针：快指针走n步后慢指针再走，当快指针到最后，慢指针就到了倒数第n个点，需要判断快指针的下一个结点
  let fast: ListNode | null = new ListNode(undefined, head);
  let slow: ListNode | null = new ListNode(undefined, head);
  const dummy = slow;
  let count = 0;
  while (fast) {
    if (fast.next === null) {
      // 到了临界点
      if (slow?.next) {
        slow.next = slow.next?.next;
      }
      break;
    }
    fast = fast.next;
    if (count === n) {
      slow = slow!.next;
    } else {
      count++;
    }
  }
  return dummy.next;
}
// @lc code=end
