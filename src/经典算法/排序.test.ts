import { bubbleSort, quickSort } from "./排序";

const original = [7, 2, 5, 4, 9, 0];
const sorted = [0, 2, 4, 5, 7, 9];

test("should sorted by bubble", () => {
  expect(bubbleSort([...original])).toEqual([...sorted]);
});

test("should sorted by quick", () => {
  expect(quickSort([...original])).toEqual([...sorted]);
});
