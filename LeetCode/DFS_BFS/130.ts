import { myTest } from "../../utils";

type Board = ("X" | "O" | "#")[][];

function solve(board: Board) {
  const nR = board.length;
  if (nR <= 2) return;
  const nC = board[0].length;

  for (let r = 0; r < nR; r++) {
    for (let c = 0; c < nC; c++) {
      const isEdge = r === 0 || r === nR - 1 || c === 0 || c === nC - 1;
      if (isEdge && board[r][c] === "O") dfs(board, r, c);
    }
  }

  for (let r = 0; r < nR; r++) {
    for (let c = 0; c < nC; c++) {
      if (board[r][c] === "#") board[r][c] = "O";
      else if (board[r][c] === "O") board[r][c] = "X";
    }
  }

  function dfs(board: Board, r: number, c: number) {
    if (
      r < 0 ||
      r >= nR ||
      c < 0 ||
      c >= nC ||
      board[r][c] === "X" ||
      board[r][c] === "#"
    )
      return;
    board[r][c] = "#";

    const neighbors = [
      [r - 1, c],
      [r, c + 1],
      [r + 1, c],
      [r, c - 1],
    ];
    for (let i = 0; i < 4; i++) {
      const [currR, currC] = neighbors[i];

      if (
        currR > 0 &&
        currR < nR &&
        currC > 0 &&
        currC < nC &&
        board[currR][currC] === "O"
      )
        dfs(board, currR, currC);
    }
  }
}

const test1: Board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

solve(test1);
myTest(test1, [
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
]);

const test2: Board = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
solve(test2);
myTest(test2, [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
]);
