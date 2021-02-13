export function removeDuplicates(nums: number[]): number {
  let lastNum = null;
  for (let index = 0; index < nums.length; index++) {
    const cur = nums[index];
    if (lastNum === cur) {
      nums.splice(index, 1);
      index--;
    } else lastNum = cur;
  }
  return nums.length;
}

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log(nums);
