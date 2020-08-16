import { myTest } from "../../utils";

function subsetsWithDupBackstack(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const output: number[][] = [];

  function backtrack(start: number, curr: number[], subsetLength: number) {
    if (curr.length === subsetLength) {
      output.push([...curr]);
      return;
    }

    for (let index = start; index < nums.length; index++) {
      curr.push(nums[index]);
      backtrack(index + 1, curr, subsetLength);
      curr.pop();
    }
  }

  for (let subsetLength = 0; subsetLength <= nums.length; subsetLength++) {
    backtrack(0, [], subsetLength);
  }

  function removeDup(arr: number[][]): number[][] {
    const set = new Set(arr.map((v) => JSON.stringify(v)));
    return Array.from(set).map((v) => JSON.parse(v));
  }

  return removeDup(output);
}

myTest(subsetsWithDupBackstack([1, 2, 2]), [
  [],
  [1],
  [2],
  [1, 2],
  [2, 2],
  [1, 2, 2],
]);

myTest(subsetsWithDupBackstack([4, 4, 4, 1, 4]), [
  [],
  [1],
  [4],
  [1, 4],
  [4, 4],
  [1, 4, 4],
  [4, 4, 4],
  [1, 4, 4, 4],
  [4, 4, 4, 4],
  [1, 4, 4, 4, 4],
]);
