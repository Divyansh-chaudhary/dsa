/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Constraints:
    1 <= nums.length <= 5 * 104
    -109 <= nums[i] <= 109
 */


const findMajority = (nums) => {
    const candidate1 = { frequency: 0, name: null };
    const candidate2 = { frequency: 0, name: null };
    nums.forEach(num => {
        if (candidate1.frequency === 0 && candidate2.name !== num) {
            candidate1.frequency++;
            candidate1.name = num;
        } else if (candidate2.frequency === 0 && candidate1.name !== num) {
            candidate2.frequency++;
            candidate2.name = num;
        } else if (candidate1.name === num) {
            candidate1.frequency++
        } else if (candidate2.name === num) {
            candidate2.frequency++
        } else {
            candidate2.frequency--
            candidate1.frequency--
        }
    });
    let c1Count = 0, c2Count = 0;
    nums.forEach(num => {
        if (num === candidate1.name) c1Count++
        if (num === candidate2.name) c2Count++
    });
    const results = []
    if (c1Count > Math.floor(nums.length / 3)) results.push(candidate1.name)
    if (c2Count > Math.floor(nums.length / 3)) results.push(candidate2.name)
    return results;
}

console.log(findMajority([1, 2, 1, 1, 1, 2, 2]));