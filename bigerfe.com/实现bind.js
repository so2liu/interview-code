"use strict";

Function.prototype.myBind = function (ctx) {
  if (typeof this !== "function")
    throw Error(`Wrong usage with this = ${typeof this}`);

  const f = this;
  return (...args) => f.apply(ctx, args);
};

const testObj = {
  a: 1,
  fn: function (b) {
    return this.a + b;
  },
};

const fn = testObj.fn.myBind(testObj);

console.log(fn(2));
