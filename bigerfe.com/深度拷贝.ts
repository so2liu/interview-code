import { myTest } from "../utils";

function deepCopy<T>(input: T): T {
  if (typeof input !== "object") return input;

  const output: any = Array.isArray(input) ? [] : {};

  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      // 其实这里有一个循环引用的问题，如何避免循环引用

      const element = input[key];
      output[key] = deepCopy(element);
    }
  }
  return output as T;
}

const test1 = "hi";
const expect1 = "hi";
myTest(deepCopy(test1), expect1);

const test2 = 2;
const expect2 = 2;
myTest(deepCopy(test2), expect2);

const test3 = { a: 1, obj: { a: 1, b: 2 }, arr: [1, 2, 3, 4] };
myTest(deepCopy(test3), test3);
