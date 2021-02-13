import { myTest } from "../../utils";

function subsets(nums: number[]): number[][] {
  const output: number[][] = [[]];
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index];
    const outputLength = output.length;
    for (let outputIndex = 0; outputIndex < outputLength; outputIndex++) {
      output.push(output[outputIndex].concat(current));
    }
  }
  return output;
}

function subsetsBacktracking(nums: number[]): number[][] {
  const output: number[][] = [];

  function backtrack(first: number, curr: number[], subsetLength: number) {
    if (curr.length === subsetLength) output.push([...curr]);

    for (let i = first; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(i + 1, curr, subsetLength);
      curr.pop();
    }
  }

  for (let subsetLength = 0; subsetLength <= nums.length; subsetLength++) {
    backtrack(0, [], subsetLength);
  }

  return output;
}

myTest(subsets([1, 2, 3]), [
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3],
]);

myTest(subsetsBacktracking([1, 2, 3]), [
  [],
  [1],
  [2],
  [3],
  [1, 2],
  [1, 3],
  [2, 3],
  [1, 2, 3],
]);
