import { myTest } from "../../utils";

function addBinary(a: string, b: string): string {
  let pA = a.length - 1;
  let pB = b.length - 1;

  let carray = 0;
  let result = "";
  while (pA >= 0 || pB >= 0) {
    const sum = Number(a[pA] ?? 0) + Number(b[pB] ?? 0) + carray;

    switch (sum) {
      case 3:
        carray = 1;
        result = "1".concat(result);
        break;
      case 2:
        carray = 1;
        result = "0".concat(result);
        break;
      default:
        carray = 0;
        result = String(sum).concat(result);
    }

    pA--;
    pB--;
  }

  if (carray === 1) result = "1".concat(result);
  return result;
}

myTest(addBinary("11", "1"), "100");
myTest(addBinary("1010", "1011"), "10101");
