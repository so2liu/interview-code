/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  let candidate = 0;
  return function (n) {
    for (let i = 0; i < n; i++) {
      if (knows(candidate, i)) candidate = i;
    }

    for (let i = 0; i < n; i++) {
      if (candidate === i) continue;
      if (!knows(i, candidate) || knows(candidate, i)) return -1;
    }

    return candidate;
  };
};
