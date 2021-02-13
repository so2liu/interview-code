// es6
const single = Symbol("single");

class A {
  static get instance() {
    if (this[single]) return this[single];

    return (this[single] = new this());
  }

  constructor() {
    const sourceClass = this.constructor;
    if (!sourceClass[single]) {
      sourceClass[single] = this;
    }
    return sourceClass[single];
  }
}

const a1 = new A();
const a2 = new A();

console.log(a1 === a2); // true

// es5
const B = (function () {
  let instance;
  return function () {
    if (!instance) instance = this;
    return instance;
  };
})();

const b1 = new B();
const b2 = new B();

console.log(b1 === b2);
