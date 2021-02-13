function Effect<T>(f: (arg: T) => any) {
  return {
    get: () => f,
    run: (x: T) => f(x),
    map: (g: (arg: any) => any) => Effect((x: T) => g(f(x))),
  };
}

const fWithEffect = (x: number) => {
  console.log("Here is effect");
  return 0;
};

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;
const cube = (x: number) => x ** 3;
const setString = () => "hi";
const getLength = (x: string) => x.length;

const calculations = Effect(fWithEffect)
  .map(increment)
  .map(double)
  .map(cube)
  .map(setString)
  .map(getLength);

const result = calculations.run(1);
console.log(result);
