/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head?.next) return head;
  let point = head;
  let size = 1;
  // 先成环
  while (point.next) {
    size++;
    point = point.next;
  }
  point.next = head;

  //   计算断开位置
  let step = k;
  if (k >= size) {
    step = k % size;
  }

  step = size - step;

  let count = 0;
  while (count < step) {
    count++;
    point = point.next!;
  }

  const result = point.next;
  point.next = null; // 断开

  return result;
}
// @lc code=end
