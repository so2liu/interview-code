function firstMissingPositive(nums: number[]): number {
  let result = 1;
  while (nums.includes(result)) {
    result++;
  }
  return result;
}
