import { myTest } from "../../utils";

function findFirstBad(n: number) {
  if (n === 1) return isBadVersion(1) ? 1 : null;

  let left = 1;
  let right = n;
  while (left < right - 1) {
    const mid = Math.floor((left + right) / 2);
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return isBadVersion(left) ? left : right;
}

function isBadVersion(v: number): boolean {
  const firstBad = 5;
  return v > firstBad;
}

myTest(findFirstBad(10), 5);
