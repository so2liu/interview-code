export function currify(fn: (...args: any[]) => any) {
  const argCollection: any[] = [];

  return function curried(...args: any[]) {
    argCollection.push(...args);

    if (argCollection.length >= fn.length)
      return fn(...argCollection.slice(0, fn.length));
    return curried;
  };
}

const add = (a: number, b: number, c: number) => a + b + c;

console.log(currify(add)(1, 2)(3), currify(add)(1)(2)(3));
// 但是如果不小心给多了参数，就不行
