function test<T>(toTest: T, standardValue?: T) {
  if (
    typeof toTest === "object" &&
    JSON.stringify(toTest) === JSON.stringify(standardValue)
  )
    return true;
  if (toTest === standardValue) return true;
  return toTest;
}

export const myTest = <T>(toTest: T, standardValue?: T) =>
  console.log("[TEST]", JSON.stringify(test(toTest, standardValue), null, 2));

export function buildEmptyMatrix(m: number, n: number) {
  const matrix = new Array(m);
  for (let i = 0; i < m; i++) {
    matrix[i] = new Array(n);
  }
  return matrix;
}

export function myConsole(input: any) {
  console.log(input);
  return input;
}
