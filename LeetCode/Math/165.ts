import { myTest, Tick } from "../../utils";

const tick = new Tick();

function compareVersion(version1: string, version2: string): -1 | 0 | 1 {
  const ver1Arr = version1.split(".");
  const ver2Arr = version2.split(".");

  tick.tick();
  for (
    let index = 0;
    index < Math.max(ver1Arr.length, ver2Arr.length);
    index++
  ) {
    if (Number(ver1Arr[index] ?? 0) < Number(ver2Arr[index] ?? 0)) return -1;
    if (Number(ver1Arr[index] ?? 0) > Number(ver2Arr[index] ?? 0)) return 1;
  }

  return 0;
}

myTest(compareVersion("0.1", "1.1"), -1);
tick.end();
myTest(compareVersion("1.0.1", "1"), 1);
tick.end();
myTest(compareVersion("1.01", "1.001"), 0);
tick.end();
myTest(compareVersion("1.0", "1.00"), 0);
tick.end();

tick.summary();
