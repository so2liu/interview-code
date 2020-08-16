import { myTest } from "../utils";

class MaxHeap<T> {
  private _array: MaxHeap.MyNode<T>[];

  constructor() {
    this._array = [];
  }

  get size() {
    return this._array.length;
  }

  get data() {
    return JSON.parse(JSON.stringify(this._array));
  }

  left(i: number) {
    if (i >= 0 && i < this.size) {
      const target = this.getLeftChild(i);
      return target;
    }
  }

  right(i: number) {
    if (i >= 0 && i < this.size) {
      const target = this.getRightChild(i);
      return target;
    }
  }

  append(value: T, priority: number) {
    this._array.push(new MaxHeap.MyNode(value, priority));
    this._heapUp();
  }

  poll() {
    this.validateEmpty();

    const lastHead = this._array[0];
    this._array[0] = this._array.pop() as MaxHeap.MyNode<T>;
    this._heapDown();
    return lastHead;
  }

  peak() {
    this.validateEmpty();
    return this._array[0];
  }

  private _swap(index1: number, index2: number) {
    const tmp = this._array[index1];
    this._array[index1] = this._array[index2];
    this._array[index2] = tmp;
  }

  private _heapUp() {
    let i = this.size - 1;
    while (
      this.hasParent(i) &&
      this.getParent(i).priority < this._array[i].priority
    ) {
      const parentIndex = this.getParentIndex(i);
      this._swap(i, parentIndex);
      i = parentIndex;
    }
  }

  private _heapDown() {
    let i = 0;
    while (this.hasLeftChild(i)) {
      if (this.getLeftChild(i).value > this._array[i].value) {
        const leftChildIndex = this.getLeftChildIndex(i);
        this._swap(i, leftChildIndex);
        i = leftChildIndex;
        continue;
      } else if (
        this.hasRightChild(i) &&
        this.getRightChild(i).value > this._array[i].value
      ) {
        const rightChildIndex = this.getRightChildIndex(i);
        this._swap(rightChildIndex, i);
        i = rightChildIndex;
        continue;
      } else break;
    }
  }

  private getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.size;
  }

  private hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  private getLeftChild(parentIndex: number) {
    return this._array[this.getLeftChildIndex(parentIndex)];
  }

  private getRightChild(parentIndex: number) {
    return this._array[this.getRightChildIndex(parentIndex)];
  }

  private getParent(parentIndex: number) {
    return this._array[this.getParentIndex(parentIndex)];
  }

  private validateEmpty() {
    if (this.size === 0) throw new Error("isEmpty");
  }
}

namespace MaxHeap {
  export class MyNode<T> {
    value: T;
    protected _priority: number;

    constructor(value: T, priority: number) {
      this.value = value;
      this._priority = priority;
    }

    get priority() {
      return this._priority;
    }
  }
}

// test
const arr = [1, 2, 5, 3, 8];
const heap = new MaxHeap();
arr.forEach((e) => {
  heap.append(e, e);
});

myTest(heap.peak().value, 8, "head");

const leftOfHead = heap.left(0);
if (leftOfHead) myTest(leftOfHead.value, 5);

const lastHead = heap.poll();
myTest(lastHead.value, 8, "poll");
myTest(heap.peak().value, 5, "poll, peak");
