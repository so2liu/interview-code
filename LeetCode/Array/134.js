/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (
    gas.reduce((pre, cur) => pre + cur) < cost.reduce((pre, cur) => pre + cur)
  )
    return -1;

  let tank = 0;
  let idx = 0;
  for (let index = 0; index < gas.length; index++) {
    tank += gas[index] - cost[index];
    if (tank < 0) {
      tank = 0;
      idx = index + 1;
    }
  }
  return idx;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
console.log(canCompleteCircuit([4, 5, 2, 6, 5, 3], [3, 2, 7, 3, 2, 9]));
