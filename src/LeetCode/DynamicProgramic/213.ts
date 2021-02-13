import { myTest } from "../../utils";

function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  return Math.max(
    robHelper(nums.slice(0, nums.length - 1)),
    robHelper(nums.slice(1, nums.length))
  );

  function robHelper(nums: number[]): number {
    const dp = new Array(nums.length);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    return dp[nums.length - 1];
  }
}

myTest(rob([2]), 2);
myTest(rob([2, 3]), 3);
myTest(rob([2, 3, 2]), 3);
myTest(rob([1, 2, 3, 1]), 4);
