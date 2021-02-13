function retry(
  f: (...args: any[]) => any,
  ms: number,
  maxRetryNum: number = 3
) {
  let factor = 1;
  let retryNum = 0;

  return function (...args: any[]) {
    const result = f(...args);
    if (result) return result;

    setTimeout(function run() {
      retryNum++;
      const result = f(...args);

      if (result) return result;

      factor = factor * 2;
      if (retryNum < maxRetryNum) setTimeout(run, ms * factor);
    }, ms);
  };
}

// Test

function requestAlwaysFail() {
  let lastTS: number;
  return function (...args: string[]) {
    const intervalSec =
      lastTS === undefined ? 0 : ((Date.now() - lastTS) / 1000).toFixed(1);
    lastTS = Date.now();
    console.log(
      `After ${intervalSec} Seconds, get request with params ${args}`
    );
    return null;
  };
}

const request = requestAlwaysFail();
const testFn = retry(request, 500);
testFn("hi", "ho");
