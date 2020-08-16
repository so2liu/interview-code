import { myTest } from "../../utils";

function climbStairs(n: number): number {
  if (n === 0) return 1;

  const cache: number[] = new Array(n).fill(undefined);

  function climb(rest: number): number {
    if (rest < 0) return 0;
    if (rest === 0) return 1;

    if (typeof cache[rest] === "number") return cache[rest];

    const result = climb(rest - 1) + climb(rest - 2);
    cache[rest] = result;
    return result;
  }

  return climb(n);
}

function climbStairsDynamic(n: number) {
  let p = 0;
  let q = 0;
  let r = 1;

  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}

function climbStairsMathPow(n: number): number {
  const sqrt5 = Math.sqrt(5);
  const fibn =
    Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fibn / sqrt5);
}

myTest(climbStairs(3), 3);
myTest(climbStairs(2), 2);
myTest(climbStairs(1), 1);
myTest(climbStairs(0), 1);
myTest(climbStairs(40), 0);
myTest(climbStairs(100), 0);

myTest(climbStairsDynamic(3), 3);
myTest(climbStairsDynamic(2), 2);
myTest(climbStairsDynamic(1), 1);
myTest(climbStairsDynamic(0), 1);
myTest(climbStairsDynamic(40), 0);
myTest(climbStairsDynamic(100), 0);

myTest(climbStairsMathPow(3), 3);
myTest(climbStairsMathPow(2), 2);
myTest(climbStairsMathPow(1), 1);
myTest(climbStairsMathPow(0), 1);
myTest(climbStairsMathPow(40), 0);
myTest(climbStairsMathPow(100), 0);
