// Kadane's Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array nums, find the subarray with the largest sum and
// return the sum of the elements present in that subarray.
// A subarray is a contiguous non - empty sequence of elements within an array.

/**
sum all digits store the sum in total, keep subtracting last one by one, compare the largest and store sum
repeat with with second digit to last, which ever is largest returns sum
if all are negative return largets number
O(n2)

iterate over each element, store sum and max result of sum, if sum becomes negative reset it to 0, kee repeating till end
O(n)
 */

const kadaneAlgo = (arr) => {
    let sum = 0;
    let max = -Infinity;
    let subArray = []
    for (let i = 0; i < arr.length; i++) {
        const add = arr[i] + sum
        sum = add < 0 ? 0 : add;
        max = Math.max(max, add);
        if (add >= 0) subArray.push(arr[i])
        else subArray = []
    }
    return subArray;
}

console.log(kadaneAlgo([2, 3, -7, 4, 7, -4]));
console.log(kadaneAlgo([-2, -3, -7, -4, -7, -4]));