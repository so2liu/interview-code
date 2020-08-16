import { myTest } from "../../utils";

function combinationSumBacktrack(
  candidates: number[],
  target: number
): number[][] {
  const output: number[][] = [];
  const buffer: number[] = [];
  backtrack(0, target);
  return output;

  function backtrack(startIdx: number, target: number) {
    if (target === 0) return output.push([...buffer]);
    if (target < 0) return;
    if (startIdx === candidates.length) return;

    buffer.push(candidates[startIdx]);
    backtrack(startIdx, target - candidates[startIdx]);
    buffer.pop();
    backtrack(startIdx + 1, target);
  }
}

myTest(combinationSumBacktrack([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
