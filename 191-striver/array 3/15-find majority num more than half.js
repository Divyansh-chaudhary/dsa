// Boyer-Moore Voting Algorithm

// Find the Majority Element that occurs more than N/2 times
// Problem Statement: Given an integer array nums of size n, return the majority element of the array.
// The majority element of an array is an element that appears more than n / 2 times in the array.The array is guaranteed to have a majority element.


/**
 * - 1 approach is using hash map and count of number then traverse and find max count number
2nd approach - suppose we have leders full of room, half+1 supports 1 and other supports max 1 in worst case, if we take vote and remove them one by one there will still be one from majority
 */

const findMajority = (nums) => {
    let count = 0;
    let element = null;
    nums.forEach((num, i) => {
        if (count === 0) element = num;
        if (i === 0 || element === num) count++;
        else count--;
    })
    return element;
}

console.log(findMajority([3, 2, 3]));
console.log(findMajority([3, 3, 4]));
console.log(findMajority([7, 0, 0, 7, 7, 7, 7, 5, 3]));
console.log(findMajority([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2]));
