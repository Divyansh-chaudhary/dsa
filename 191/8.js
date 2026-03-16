/**
Merge Overlapping Sub-intervals
Problem Statement: Given an array of intervals
where intervals[i] = [starti, endi], merge all overlapping intervals and 
return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

const mergeOverlapSubIntervals = (intervals) => {
    const results = [];
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < sorted.length; i++) {
        const item = sorted[i];
        if (i === 0) {
            results.push(item)
        } else {
            const last = results[results.length - 1]
            if (last[1] >= item[0]) {
                if (last[1] < item[1])
                    last[1] = item[1];
            } else {
                results.push(item)
            }
        }
    }
    return results
}

const intervals = [[4, 7], [1, 4]]
console.log(mergeOverlapSubIntervals(intervals));