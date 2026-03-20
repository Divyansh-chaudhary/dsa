// reverse pairs

const merge = (lArr, rArr) => {
    let pairs = 0;
    let j = 0;
    for (let i = 0; i < lArr.length; i++) {
        while (j < rArr.length && lArr[i] > 2 * rArr[j])
            j++;
        pairs += j;
    }

    let i = 0;
    j = 0;
    const result = [];
    while (i < lArr.length && j < rArr.length) {
        if (lArr[i] <= rArr[j]) result.push(lArr[i++]);
        else result.push(rArr[j++]);
    }
    while (i < lArr.length) result.push(lArr[i++]);
    while (j < rArr.length) result.push(rArr[j++]);

    return [result, pairs];
};
const mergeSort = (arr) => {
    if (arr.length === 1) return [arr, 0];
    const mid = Math.floor(arr.length / 2);
    const [lArr, lPairs] = mergeSort(arr.slice(0, mid));
    const [rArr, rPairs] = mergeSort(arr.slice(mid));
    const [merged, pairs] = merge(lArr, rArr);
    return [merged, lPairs + pairs + rPairs];
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    return mergeSort(nums)[1];
};

console.log(reversePairs([2, 4, 3, 5, 1]));