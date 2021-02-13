export function removeDuplicates(nums: number[]): number {
  let lastNum = null;
  let timesCount = 0;
  const maxTimes = 2;

  for (let index = 0; index < nums.length; index++) {
    const cur = nums[index];
    if (cur !== lastNum) {
      lastNum = cur;
      timesCount = 0;
      continue;
    }

    timesCount++;
    if (timesCount >= maxTimes) {
      nums.splice(index, 1);
      index--;
    }
  }

  return nums.length;
}

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);
