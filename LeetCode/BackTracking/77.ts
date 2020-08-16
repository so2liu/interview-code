import { myTest } from "../../utils";

function combineBacktrack(n: number, k: number): number[][] {
  const output: number[][] = [];

  function backtrack(start: number, curr: number[]) {
    const arr = new Array(n).fill(null).map((v, i) => i + 1);

    if (curr.length === k) {
      output.push([...curr]);
      return;
    }

    for (let i = start; i < n; i++) {
      if (curr.length > k) break;

      curr.push(arr[i]);
      backtrack(i + 1, curr);
      curr.pop();
    }
  }

  backtrack(0, []);

  return output;
}

myTest(combineBacktrack(4, 2), [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
]);
