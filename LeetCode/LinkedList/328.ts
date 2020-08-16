import { ListNode } from "./206";
import { myTest } from "../../utils";

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const oddHead = head;
  const evenHead = head.next;

  let first = head;
  let second = head.next;
  while (first.next && second.next) {
    first.next = first.next.next;
    second.next = second.next.next;

    first = first.next;
    second = second.next;
  }

  first.next = evenHead;
  return oddHead;
}

myTest(
  oddEvenList({
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
  })
);

myTest(
  oddEvenList({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  })
);
