import { myTest } from "../../utils";

function numIslands(grid: string[][]): number {
  let num = 0;
  const yDirection = [-1, 0, 1, 0];
  const xDirection = [0, 1, 0, -1];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "0") continue;
      const stack: [number, number][] = [[y, x]];
      dfs(stack);
    }
  }

  console.log(grid);
  return num;

  function dfs(stack: number[][]) {
    if (stack.length === 0) {
      ++num;
      return;
    }

    const [y, x] = stack[stack.length - 1];
    grid[y][x] = "0";

    const conditionUp = grid[y - 1] === undefined || grid[y - 1][x] === "0";
    const conditionRight =
      grid[y][x + 1] === undefined || grid[y][x + 1] === "0";
    const conditionDown = grid[y + 1] === undefined || grid[y + 1][x] === "0";
    const conditionLeft =
      grid[y][x - 1] === undefined || grid[y][x - 1] === "0";

    if (conditionUp && conditionRight && conditionDown && conditionLeft) {
      stack.pop();
      dfs(stack);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const newX = x + xDirection[i];
      const newY = y + yDirection[i];
      if (grid[newY] && grid[newY][newX] === "1") {
        stack.push([newY, newX]);
        dfs(stack);
      }
      if (i === 2) return;
    }
  }
}

myTest(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1
);

myTest(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  3
);

myTest(
  numIslands2([
    [
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
    ],
    [
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
    ],
    [
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
    ],
    [
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
    ],
    [
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
    ],
    [
      "1",
      "0",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
    ],
    [
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "1",
      "1",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
    ],
    [
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "0",
      "0",
    ],
  ]),
  55
);

type Grid = ("0" | "1")[][];
function numIslands2(grid: Grid) {
  const nR = grid.length;
  if (nR === 0) return 0;
  const nC = grid[0].length;

  let num = 0;
  for (let r = 0; r < nR; r++) {
    for (let c = 0; c < nC; c++) {
      if (grid[r][c] === "1") {
        num++;
        dfs(grid, r, c);
      }
    }
  }

  return num;

  function dfs(grid: Grid, r: number, c: number) {
    grid[r][c] = "0";

    const neighbors = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ];
    for (let i = 0; i < neighbors.length; i++) {
      const [currR, currC] = neighbors[i];
      if (
        currR >= 0 &&
        currR < nR &&
        currC >= 0 &&
        currC < nC &&
        grid[currR][currC] === "1"
      ) {
        dfs(grid, currR, currC);
      }
    }
  }
}
