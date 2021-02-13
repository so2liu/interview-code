export const myTest = <T>(toTest: T, standardValue?: T, describe?: string) => {
  let isPassed =
    typeof toTest === "object"
      ? JSON.stringify(toTest) === JSON.stringify(standardValue)
      : toTest === standardValue;

  const describeStr = describe ? ` ${describe}` : "";

  if (isPassed) return console.log(`[Info] Passed`);

  console.error(`[Error${describeStr}] ${JSON.stringify(toTest, null, 2)}`);
  return;
};

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

export function devideLine(title: string) {
  console.log(`============ [${title}] =============`);
}
