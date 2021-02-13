import { myTest } from "../../utils";
import { performance } from "perf_hooks";

class HashTable {
  private _table: any[][];
  private _tableLength: number;

  constructor(pairs: { [key: string]: any } = {}) {
    this._tableLength = 137;
    this._table = new Array(this._tableLength);
    Object.keys(pairs).forEach((key) => {
      this.set(key, pairs[key]);
    });
  }

  private hashFunc(value: string) {
    const H = 37;
    return (
      value
        .split("")
        .map((char) => char.charCodeAt(0))
        .reduce((arr, cur) => cur * H + arr, 0) % this._tableLength
    );
  }

  get(targetKey: string) {
    return this._table[this.hashFunc(targetKey)].find(
      ([key, value]) => key === targetKey
    )[1];
  }

  get length() {
    return this._table
      .filter(() => true)
      .reduce((arr, cur) => cur.length + arr, 0);
  }

  set(key: string, value: string) {
    const idx = this.hashFunc(key);

    if (this._table[idx] === undefined) {
      this._table[idx] = [[key, value]];
      return;
    }

    this._table[idx].push([key, value]);
  }

  toString() {
    return this._table
      .map((field, idx) => `${idx} => ${field}`)
      .filter(() => true)
      .join("\n");
  }
}

const test = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];
const hashTable = new HashTable(test);
// console.log(hashTable.toString());

myTest(hashTable.length, test.length, "碰撞测试");
myTest(hashTable.get("3"), test[3], "get");

const collisionTest = new Array(50).fill("hi");
myTest(new HashTable(collisionTest).length, collisionTest.length, "碰撞测试");
