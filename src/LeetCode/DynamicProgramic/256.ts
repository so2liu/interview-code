import { myTest, buildEmptyMatrix, myConsole } from "../../utils";

function minCost(costs: number[][]): number {
  for (let i = costs.length - 2; i >= 0; i--) {
    costs[i][0] += Math.min(costs[i + 1][1], costs[i + 1][2]);
    costs[i][1] += Math.min(costs[i + 1][0], costs[i + 1][2]);
    costs[i][2] += Math.min(costs[i + 1][0], costs[i + 1][1]);
  }

  console.log(costs);
  return Math.min(...costs[0]);
}

myTest(
  minCost([
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
  ]),
  10
);
