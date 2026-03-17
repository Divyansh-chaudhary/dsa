// Kadane's Algorithm
//  : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array nums, find the subarray with the largest sum and
// return the sum of the elements present in that subarray.
// A subarray is a contiguous non - empty sequence of elements within an array.


// if we add 
// Kadane's Algorithm
// don't add big negative on positive sum instead set sum to 0

/**
sum all digits store the sum in total, keep subtracting last one by one, compare the largest and store sum
repeat with with second digit to last, which ever is largest returns sum
if all are negative return largets number
O(n2)

iterate over each element, store sum and max result of sum, if sum becomes negative reset it to 0, kee repeating till end
O(n)
 */

const maxSubArraySum = (arr) => {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
}

const maxSubArray = (arr) => {
    let sum = 0;
    let max = -Infinity;
    let start = 0, end = 0, tempStart = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum > max) {
            max = sum;
            end = i;
            start = tempStart;
        }

        if (sum < 0) {
            sum = 0;
            tempStart = i + 1;
        }
    }
    return arr.filter((_, i) => i >= start && i <= end)
}

console.log(maxSubArraySum([2, 3, -7, 4, 7, -4]));
console.log(maxSubArray([-2, -3, -7, -4, -7, -4]));