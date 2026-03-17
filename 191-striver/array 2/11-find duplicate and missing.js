// Find the repeating and missing numbers

// Problem Statement: Given an integer array nums of size n containing values from[1, n]
// and each value appears exactly once in the array, except for A, which appears twice and B which is missing.
// Return the values A and B, as an array of size 2, where A appears in the 0 - th index and B in the 1st index.
//     Note: You are not allowed to modify the original array.

const findDuplicateAndMissing = (nums) => {
    /** O(n) space and O(n) time  */

    /**  find duplicate using Hashing
        now because array contains 1 to n make sum of n and subtract duplicate to find missing number
        [3, 5, 4, 1, 1] - output - 2
        duplicate is 1
        sumn of n - (sum of arr nums - duplicate)
   */
    let sum = nums.reduce((total, num) => total += num, 0);
    const sumN = (nums.length * (nums.length + 1)) / 2;
    const seen = new Set();
    let duplicate = -1
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            duplicate = nums[i];
            break;
        }
        seen.add(nums[i]);
    }
    const missing = sumN - (sum - duplicate)
    return [duplicate, missing];
}

console.log(findDuplicateAndMissing([1, 2, 3, 6, 7, 5, 7]));