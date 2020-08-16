import { myTest } from "../../utils";

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const buffer: number[] = [];
  const output: number[][] = [];

  const backtrack = (startIdx: number, target: number) => {
    if (target < 0) return;
    if (target === 0) {
      output.push([...buffer]);
      return;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      const currCandidate = candidates[i];
      if (i > startIdx && currCandidate === candidates[i - 1]) continue;

      buffer.push(currCandidate);
      backtrack(i + 1, target - currCandidate);
      buffer.pop();
    }
  };

  backtrack(0, target);
  return output;
}

myTest(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8), [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6],
]);

myTest(combinationSum2([1, 1, 1, 1, 1], 3), [[1, 1, 1]]);
