import { ListNode } from "./206";
import { myTest } from "../../utils";

function reverseBetweenIterative(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  if (!head) return head;

  let curr = head;
  let prev = null;
  let index = 1;

  while (index < m) {
    prev = curr;
    curr = curr.next;
    index++;
  }

  const tail = curr;
  const con = prev;

  while (index <= n) {
    const third = curr.next;
    curr.next = prev;
    prev = curr;
    curr = third;
    index++;
  }

  if (con) con.next = prev;
  else head = prev;

  tail.next = curr;

  return head;
}

myTest(
  reverseBetweenIterative(
    {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
    },
    2,
    3
  )
);

myTest(
  reverseBetweenIterative(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    2,
    4
  )
);
