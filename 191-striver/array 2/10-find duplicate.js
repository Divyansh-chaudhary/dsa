// Find the duplicate in an array of N + 1 integers
// Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // Brute force O(1) space and O(n log n) time
    // sort array and next in next loop find repeated number

    // Better approach O(n) space and O(n) time
    // create map of numbers, if any number appears more than once return

    // optimal approach O(1) space and O(n) time
    // for (let i = 0; i < nums.length; i++) {
    //     const index = Math.abs(nums[i]);
    //     if (nums[index] < 0) return index;
    //     nums[index] = -nums[index];
    // }
    // return -1;

    // another approach with slow and fast pointer, to check if number appears again or not
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast)

    fast = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow


};

console.log(findDuplicate([2, 2, 3, 4, 6, 5])); // 3


/**

 */