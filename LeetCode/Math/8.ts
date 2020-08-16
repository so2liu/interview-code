import { myTest } from "../../utils";

const myAtoi = (str: string): number => {
  const between = (a: number, b: number) => (x: number) =>
    x ? x >= Math.min(a, b) && x <= Math.max(a, b) : false;

  const isNumber = (char: string) => between(48, 57)(char.codePointAt(0) ?? 0);

  const to32Bit = (x: number): number =>
    x > 0 ? Math.min(x, Math.pow(2, 31) - 1) : Math.max(x, -Math.pow(2, 31));

  const target = str.trimLeft();
  // if (!target) return 0;
  // if (!(isNumber(target[0]) || target[0] === "-")) return 0;
  // if ((target[0] === "-" && !target[1]) || !isNumber(target[1])) return 0;

  if (
    !(
      (target && isNumber(target[0])) ||
      (["-", "+"].includes(target[0]) && target[1] && isNumber(target[1]))
    )
  )
    return 0;

  let index = 1;
  while (index < target.length) {
    if (!isNumber(target[index])) break;
    index++;
  }

  const out = Number(target.substring(0, index));

  return to32Bit(out);
};

myTest(myAtoi("   "), 0);
myTest(myAtoi("   -"), 0);
myTest(myAtoi("   -42"), -42);
myTest(myAtoi("   +42"), 42);
myTest(myAtoi("3.14"), 3);
myTest(myAtoi("4193 with words"), 4193);
myTest(myAtoi("w 3"), 0);
myTest(myAtoi("-91283472332"), -2147483648);
