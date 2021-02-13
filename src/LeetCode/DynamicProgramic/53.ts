import { myTest } from "../../utils";

export function maxSubArray(nums: number[]): number {
  let pre = 0;
  let answer = nums[0];

  nums.forEach((n) => {
    pre = Math.max(pre + n, n);
    answer = Math.max(answer, pre);
  });

  return answer;
}

myTest(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
