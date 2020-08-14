function MyPromise(constructor) {
  let value = null;
  callbacks = [];

  this.then = (onFulfilled) => {
    callbacks.push(onFulfilled);
    return this;
  };

  function resolve(value) {
    callbacks.forEach((f) => {
      queueMicrotask(() => {
        value = f(value); // 记得把return作为value传给下一个
      });
    });
  }

  constructor(resolve);
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(1);
  }, 2000);
})
  .then((value) => {
    console.log(value + 1);
    return value + 1;
  })
  .then((value) => {
    console.log(value + 1);
    return value + 1;
  });
