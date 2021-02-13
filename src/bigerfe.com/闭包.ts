import { devideLine } from "../../utils";

// 实现bind
devideLine("myBind");

declare interface Function {
  myBind: (any: any) => any;
}

Function.prototype.bind = function (ctx: any) {
  if (typeof this !== "function")
    throw Error(`Wrong usage with this = ${typeof this}`);

  const f = this;
  return (...args: any) => f.apply(ctx, args);
};

const testObj = {
  a: 1,
  fn: function (b: number) {
    return this.a + b;
  },
};

const fn = testObj.fn.bind(testObj);

console.log(fn(2));

// 实现debounce
devideLine("debounce");
const debounce = (callback: (...any: any) => void, ms: number) => {
  let timerId: number | undefined;

  return function (...args: any[]) {
    if (timerId !== undefined) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
      timerId = undefined;
    }, ms);
  };
};

const fnWithDebounce = debounce(testFn, 5000);
fnWithDebounce("D", 1);
fnWithDebounce("D", 2); // only one output
setTimeout(() => {
  fnWithDebounce("D", 3);
}, 3000);

// 节流
devideLine("throttle");

function throttle(callback: (...any: any) => void, ms: number) {
  let lastTS: number | undefined;
  let timerId: number | undefined;

  return function (...args: any[]) {
    const restMs = lastTS === undefined ? ms : Date.now() - lastTS;

    lastTS = Date.now();
    if (timerId !== undefined) clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
      lastTS = undefined;
      timerId = undefined;
    }, restMs);
  };
}

const fnWithThrottle = throttle(testFn, 5000);
fnWithThrottle("T", 1);
fnWithThrottle("T", 2); // only one output

// setTimeout(() => {
//   fnWithThrottle("T", 3);
// }, 3000);
const ts = Date.now();
while (Date.now() - ts < 3000) {}
fnWithThrottle("T", 3);

function testFn(...args: any[]) {
  console.log(...args);
}
