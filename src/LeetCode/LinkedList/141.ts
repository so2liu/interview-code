import { ListNode } from "./206";

function hasTwoPointers(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;

  let slowP = head;
  let fastP = head.next;

  while (fastP !== slowP) {
    if (fastP === null || fastP.next === null) return false;
    slowP = slowP.next;
    fastP = fastP.next.next;
  }

  return true;
}

function hasHash(head: ListNode | null): boolean {
  const hash = new Map();
  let curr = head;

  while (curr !== null) {
    if (hash.has(curr)) return true;
    hash.set(curr, true);
    curr = curr.next;
  }

  return false;
}
