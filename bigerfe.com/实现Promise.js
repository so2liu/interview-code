function MyPromise(constructor) {
  let value = null;
  callbacks = [];

  this.then = (onFulfilled) => {
    callbacks.push(onFulfilled);
    return this;
  };

  function resolve(value) {
    setTimeout(() => {
      callbacks.forEach((f) => {
        f(value);
      });
    }, 0);
  }

  constructor(resolve);
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(2);
  }, 2000);
})
  .then((value) => console.log(value))
  .then((value) => console.log(value + 1));
