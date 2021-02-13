import { myTest } from "../../utils";

function numWays(n: number, k: number): number {
  if (n === 0 || k === 0) return 0;
  if (n === 1) return k;

  // Fist two posts
  let pathWithLast2Diff = k * (k - 1);
  let pathWithLast2Same = k;

  // From third to last posts
  for (let i = 2; i < n; i++) {
    let tmp = pathWithLast2Diff;
    pathWithLast2Diff = (pathWithLast2Same + pathWithLast2Diff) * (k - 1);
    pathWithLast2Same = tmp;
  }

  return pathWithLast2Same + pathWithLast2Diff;
}

myTest(numWays(3, 2), 6);
