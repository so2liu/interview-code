import { myTest } from "../../utils";

function uniquePaths(m: number, n: number): number {
  if (m <= 0 || n <= 0) return 0;

  const dp: number[][] = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);

  for (let i = 0; i < m; i++) dp[i][0] = 1;

  for (let i = 0; i < n; i++) dp[0][i] = 1;

  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

  return dp[m - 1][n - 1];
}

myTest(uniquePaths(7, 3), 28);
myTest(uniquePaths(3, 7), 28);
