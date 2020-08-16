import { myTest } from "../../utils";

function search(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(left, right);
    if (nums[mid] === target) return mid;

    if (
      (nums[left] <= nums[mid] &&
        target >= nums[left] &&
        target <= nums[mid]) ||
      (nums[left] > nums[mid] && target >= nums[left] && target >= nums[mid]) ||
      (nums[left] > nums[mid] && target <= nums[left] && target <= nums[mid])
    ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

myTest(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
myTest(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
