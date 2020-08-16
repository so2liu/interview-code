// 对象数组去重

import { myTest } from "../../utils";

interface IdWise {
  id: number;
  [key: string]: any;
}

function removeRepeated(arr: IdWise[]): IdWise[] {
  const hash = {};

  arr.forEach((a) => {
    if (hash[a.id] === undefined) hash[a.id] = a;
  });

  const newArr = Object.keys(hash).map((key) => hash[key]);

  return newArr;
}

const test = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];

const expect = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
];

myTest(removeRepeated(test), expect);
