// next_permutation : find next lexicographically greater permutation
/**
Input: Arr[] = {1,3,2}
Output: {2,1,3}
Explanation: All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.
Input : Arr[] = {3,2,1}
Output: {1,2,3}
Explanation : As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the lowest permutation.
 */

const find = (arr) => {
    if (arr.length === 1) return;

    let firstNonDecreasingIndex = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i - 1] < arr[i]) {
            firstNonDecreasingIndex = i - 1;
            break;
        }
    }

    let second = null;
    for (let i = arr.length - 1; i > firstNonDecreasingIndex; i--) {
        if (arr[i] > arr[firstNonDecreasingIndex]) {
            second = i;
            break;
        }
    }


    if (second !== null)
        [arr[firstNonDecreasingIndex], arr[second]] = [arr[second], arr[firstNonDecreasingIndex]];

    let left = second === null ? 0 : firstNonDecreasingIndex + 1
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
const arr = [3, 2, 1] // 123
find(arr)
console.log(arr);
const arr1 = [1, 3, 2] // 213 - 231 - 213
find(arr1)
console.log(arr1);
const arr2 = [1, 1, 5, 4, 1] // 14115
find(arr2)
console.log(arr2);
const arr3 = [3, 1, 2] // 321
find(arr3)
console.log(arr3);
/**
find all permutations
linear search the next permutation
if input is last one return the first one

look from last and find the first non decreasing number
[1,1,5,4,1] = here 1 and 1 index is the one which decrease starting from right
now take 1 index value and swap it with lowest digit on it's right but bigger than 1 index which is 4 in this case
[1,4,5,1,1]
now rearrange the right side of 1 index in ascending order
[1,4,1,1,5]
 */