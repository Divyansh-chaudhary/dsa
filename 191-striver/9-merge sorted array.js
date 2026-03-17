// Merge two Sorted Arrays Without Extra Space
// Problem Statement: Given two sorted integer arrays nums1 and nums2, merge both the arrays into a single array sorted in non - decreasing order.
// The final sorted array should be stored inside the array nums1 and it should be done in -place.
// Array nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s whereas nums2 has a length of n.

/**
merge two sorted arrays
1. keep index(e) to place, index (l) to compare from nums1, index(r) to compare from nums2
2. start from end in both arrays to compare bigger number and place bigger number at the end of nums1
3. move index(e) to next one if nums2 has bigger or equal number move index(r) too, if nums1 has bigger move  index(l) to index(e)
repeat until all right index are done
 */

const mergeSortedArrays = (nums1, m, nums2, n) => {
    let l = m - 1;
    let e = nums1.length - 1;
    let r = n - 1;
    while (r >= 0) {
        if (nums1[l] <= nums2[r]) {
            nums1[e] = nums2[r];
            r--;
        } else {
            nums1[e] = nums1[l];
            l--;
        }
        e--;
    }
}

let nums1 = [-5, -2, 4, 5, 0, 0, 0], nums2 = [-3, 1, 8]; //  [-5, -3, -2, 1, 4, 5, 8]
mergeSortedArrays(nums1, 4, nums2, 3);
console.log(nums1);
nums1 = [0, 2, 7, 8, 0, 0, 0], nums2 = [-7, -3, -1] // [-7, -3, -1, 0, 2, 7, 8]
mergeSortedArrays(nums1, 4, nums2, 3);
console.log(nums1);
nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6] // [1,2,2,3,5,6]
mergeSortedArrays(nums1, 3, nums2, 3);
console.log(nums1);
