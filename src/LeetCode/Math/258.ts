import { myTest } from "../../utils";

function addDigits(num: number) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
}

myTest(addDigits(38), 2);
myTest(addDigits(18), 9);
