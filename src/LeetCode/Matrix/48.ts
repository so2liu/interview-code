import { myTest } from "../../utils";

function retate(matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  matrix.forEach((row) => row.reverse());

  return matrix;
}
myTest(
  retate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),

  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
);
