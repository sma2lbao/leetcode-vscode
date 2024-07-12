/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;
  // 快慢指针 (通过slow 和 fast对比)
  const dummy = new ListNode(undefined, head);
  let slow = dummy;
  let fast = dummy.next?.next;
  while (fast) {
    if (slow!.next?.val === fast.val) {
      // 存在重复的数字
      fast = fast.next;
      continue;
    }

    if (slow.next?.next !== fast) {
      // 中间有重复的数据- slow.next(包含) -> fast（不包含）
      slow.next = fast;
    } else {
      slow = slow.next;
    }

    fast = fast.next;
  }
  //   结束判断-防止全是重复
  if (slow.next?.next !== fast) {
    // 中间有重复的数据- slow.next(包含) -> fast（不包含）
    slow!.next = fast || null;
  }

  return dummy.next;
}
// @lc code=end
