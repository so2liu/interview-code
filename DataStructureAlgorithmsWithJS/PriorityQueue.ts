import { myTest } from "../utils";

class MyNode<T> {
  value: T;
  next: MyNode<T> | null;
  protected _priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.next = null;
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }
}

class PriorityQueue<T> {
  head: MyNode<T> | null;
  protected _length: number;

  constructor() {
    this.head = null;
    this._length = 0;
  }

  push(value: T, priority: number) {
    // time complexity: O(n)
    this._length++;

    // queue is empty
    const newNode = new MyNode(value, priority);
    if (this.head === null) return (this.head = newNode);

    let current = this.head;

    // no higher priority
    if (this.head.priority < newNode.priority) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    // skip higher nodes
    while (current.next !== null && current.priority > newNode.priority) {
      current = current.next;
    }

    // insert
    newNode.next = current.next;
    current.next = newNode;

    return newNode;
  }

  peek() {
    // time complexity: O(1)
    return this.head;
  }

  pop() {
    // time complexity: O(1)

    if (this.head === null) return null;

    this._length--;

    const lastHead = this.head;
    this.head = this.head.next;
    return lastHead;
  }

  isEmpty() {
    // time complexity: O(1)

    return this.head === null;
  }

  get length() {
    return this._length;
  }
}

const pQ = new PriorityQueue();
pQ.push(1, -1); // should be head
pQ.push(3, -3);
pQ.push(2, -2);

myTest(pQ.length, 3, "length, push");

let lastHead = pQ.pop();
if (lastHead) myTest(lastHead.value, 1, "pop");

pQ.pop();
pQ.pop();

if (lastHead) myTest(pQ.isEmpty(), true, "pop, isEmpty");
