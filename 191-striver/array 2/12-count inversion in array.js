/**
 * @param {Array} leftSortedArr
 * @param {Array} rightSortedArr
 */
const merge = (leftSortedArr, rightSortedArr) => {
    let inversion = 0;
    const sortedArr = [];

    let left = 0;
    let right = 0;

    while (left < leftSortedArr.length && right < rightSortedArr.length) {
        if (leftSortedArr[left] <= rightSortedArr[right]) {
            sortedArr.push(leftSortedArr[left++]);
        } else {
            inversion += leftSortedArr.length - left;
            sortedArr.push(rightSortedArr[right++]);
        }
    }

    while (left < leftSortedArr.length) sortedArr.push(leftSortedArr[left++]);

    while (right < rightSortedArr.length) sortedArr.push(rightSortedArr[right++]);

    return [sortedArr, inversion];
};
/**
 * @param {Array} arr
 * @returns
 */
const mergeSort = (arr) => {
    if (arr.length === 1) return [arr, 0];

    const mid = Math.floor(arr.length / 2);

    const [leftSortedArr, leftInversionCount] = mergeSort(arr.slice(0, mid));
    const [rightSortedArr, rightInversionCount] = mergeSort(
        arr.slice(mid, arr.length),
    );

    const [sortedArray, inversion] = merge(leftSortedArr, rightSortedArr);

    return [sortedArray, leftInversionCount + rightInversionCount + inversion];
};

console.log(mergeSort([2, 3, 5, 2, 5, 1, 0, 0])[1]);