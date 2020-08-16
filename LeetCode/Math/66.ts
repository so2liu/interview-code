import { myTest } from "../../utils";

function plusOne(digits: number[]): number[] {
  for (let index = digits.length - 1; index >= 0; index--) {
    const digit = digits[index];

    if (digit === 9) digits[index] = 0;
    else {
      digits[index] += 1;
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
}

myTest(plusOne([1, 2, 3]), [1, 2, 4]);
myTest(plusOne([9, 9, 9]), [1, 0, 0, 0]);
