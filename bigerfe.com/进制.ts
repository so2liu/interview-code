import { myTest } from "../utils";

export default function letterTransform(str: string) {
  const capitalStr = str.toUpperCase();
  const START_CODE = "A".charCodeAt(0) - 1;
  const TOTAL_LETTERS = 26;
  const result = capitalStr
    .split("")
    .reverse()
    .reduce(
      (a, l, i) => (l.charCodeAt(0) - START_CODE) * TOTAL_LETTERS ** i + a,
      0
    );
  return result;
}

myTest(letterTransform("ZY"), 701);
