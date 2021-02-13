import { myTest, buildEmptyMatrix } from "../../utils";

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  if (m <= 0 || n <= 0) return 0;

  const dp = buildEmptyMatrix(m, n);

  let withEdgeObstacle = false;
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) withEdgeObstacle = true;
    dp[i][0] = withEdgeObstacle ? 0 : 1;
  }
  withEdgeObstacle = false;
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) withEdgeObstacle = true;
    dp[0][i] = withEdgeObstacle ? 0 : 1;
  }

  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      else dp[i][j] = 0;
    }

  return dp[m - 1][n - 1];
}

myTest(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  2
);

myTest(uniquePathsWithObstacles([[0]]), 1);
myTest(uniquePathsWithObstacles([[1]]), 0);
myTest(uniquePathsWithObstacles([[1, 0]]), 0);
