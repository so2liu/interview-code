import { ListNode } from "./206";
import { myTest } from "../../utils";

function swapPairs(head: ListNode | null): ListNode | null {
  // Recursive
  if (head === null || head.next === null) return head;

  let firstNode = head;
  let secondHead = head.next;

  firstNode.next = swapPairs(secondHead.next);
  secondHead.next = firstNode;

  return secondHead;
}

function swapPairsIterative(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const output = head.next;
  let firstNode = head;
  let secondNode = head.next;
  let A = head.next.next;

  while (secondNode) {
    firstNode.next = secondNode?.next?.next || secondNode?.next || null;
    secondNode.next = firstNode;

    firstNode = A;
    secondNode = A?.next || null;

    A = A?.next?.next || null;
  }

  return output;
}

myTest(
  swapPairsIterative({
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
  })
);

myTest(
  swapPairsIterative({
    val: 1,
    next: { val: 2, next: { val: 3, next: null } },
  })
);

console.log(
  swapPairsIterative({
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
  }).next.next.next
);

myTest(
  swapPairsIterative({
    val: 1,
    next: null,
  })
);

myTest(
  swapPairsIterative({
    val: 1,
    next: { val: 2, next: null },
  })
);

myTest(swapPairsIterative(null));
