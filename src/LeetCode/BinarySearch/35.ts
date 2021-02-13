import { myTest } from "../../utils";
import { mkdir } from "fs";

function searchInsert(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return left;
}

myTest(searchInsert([1, 3, 5, 6], 5), 2);
myTest(searchInsert([1, 3, 5, 6], 2), 1);
myTest(searchInsert([1, 3, 5, 6], 7), 4);
myTest(searchInsert([1, 3, 5, 6], 0), 0);
