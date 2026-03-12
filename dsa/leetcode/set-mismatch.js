/**
Set Mismatch
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
You are given an integer array nums representing the data status of this set after the error.
Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

Constraints:
2 <= nums.length <= 104
1 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const map = {};
  let repeatedNum = null;
  let max = 0;
  let missingNum = null;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
    if (map[nums[i]]) {
      repeatedNum = nums[i];
      map[nums[i]] += 1;
    } else map[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) if (!map[i]) missingNum = i;

  return [repeatedNum, missingNum];
};
