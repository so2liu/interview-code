export function removeElement(nums: number[], val: number): number {
  for (let index = 0; index < nums.length; index++) {
    const cur = nums[index];
    if (val === cur) {
      nums.splice(index, 1);
      index--;
    }
  }
  return nums.length;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2));
console.log(nums);
