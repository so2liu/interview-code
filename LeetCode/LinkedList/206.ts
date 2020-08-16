function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = nextTemp;
  }

  return prev;
}

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
