// 01. Two Sum

// Approach 2: Two-pass Hash Table
function twoSum(arr: number[], target: number) {
  const numToIdxHash = {};
  arr.forEach((v, i) => {
    numToIdxHash[v] = i;
  });

  for (let index = 0; index < arr.length; index++) {
    const cur = arr[index];
    if (cur > target) continue;
    if (Object.keys(numToIdxHash).includes(String(target - cur)))
      return [index, numToIdxHash[target - cur]];
  }

  throw new Error("No such number pair");
}

// Approach 3: One-pass Hash Table
function twoSum2(nums: number[], target: number) {
  const valToIdxHash = {};

  for (let index = 0; index < nums.length; index++) {
    const cur = nums[index];

    if (valToIdxHash[cur] !== undefined) return [valToIdxHash[cur], index];

    valToIdxHash[target - cur] = index;
  }
  throw new Error("No such number pair");
}

// Test
const nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
console.log(twoSum2(nums, target));
