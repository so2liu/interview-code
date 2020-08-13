import { myTest } from "../utils";

class IterateAble {
  protected __pos: number;
  protected __length: number;

  constructor() {
    this.__pos = 0;
    this.__length = 0;
  }

  get pos() {
    return this.__pos;
  }

  front() {
    this.__pos = 0;
  }

  end() {
    this.__pos = this.__length - 1;
  }

  prev() {
    if (this.__pos >= 0) this.__pos--;
  }

  next() {
    if (this.__pos < this.__length) this.__pos++;
  }

  hasNext() {
    return this.__pos < this.__length;
  }

  hasPrev() {
    return this.__pos >= 0;
  }
}

export class List<T> extends IterateAble {
  private __dataStore: T[];

  constructor() {
    super();
    this.__length = 0;
    this.__pos = 0;
    this.__dataStore = [];
  }

  getElement() {
    return this.__dataStore[this.__pos];
  }

  get length() {
    return this.__length;
  }

  private findIdx(element: T) {
    return this.__dataStore.findIndex((e) => e === element);
  }

  append(element: T) {
    this.__dataStore.push(element);
    this.__length++;
  }

  remove(element: T) {
    const idx = this.findIdx(element);
    if (idx === -1) return false;

    this.__dataStore.splice(idx, 1);
    this.__length--;
    return true;
  }

  clear() {
    this.__dataStore.length = 0;
    this.__length = this.__pos = 0;
  }

  insert(element: T, after: T) {
    const idx = this.findIdx(after);

    if (idx === -1) return false;

    this.__dataStore.splice(idx, 0, element);
    this.__length++;
    return true;
  }

  contains(element: T) {
    return this.findIdx(element) === -1 ? false : true;
  }

  toString() {
    return this.__dataStore.toString();
  }
}

// Test

const testArr = [5, 6, 7, 8, 9];

const nums = new List();
testArr.forEach((e) => nums.append(e));

myTest(nums.toString(), testArr.toString(), "append");

const targetPos = 4;
for (let i = 0; i < targetPos; i++) {
  nums.next();
}
myTest(nums.getElement(), testArr[targetPos], "move");

for (nums.front(); nums.hasNext(); nums.next()) {
  console.log(nums.getElement());
}
