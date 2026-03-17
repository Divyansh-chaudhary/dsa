// sort an array of 0,1,2
const sort = (arr) => {
    // const map = new Map()
    // arr.forEach((num) => {
    //     map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    // });
    // for (let i = 0; i < arr.length; i++) {
    //     if (map.get(0)) {
    //         arr[i] = 0;
    //         map.set(0, map.get(0) - 1);
    //     } else if (map.get(1)) {
    //         arr[i] = 1;
    //         map.set(1, map.get(1) - 1);
    //     } else if (map.get(2)) {
    //         arr[i] = 2;
    //         map.set(2, map.get(2) - 1);
    //     }
    // }

    // dutch national flag algo
    // divide array in 2 pointer, low, mid, high
    // low = 0 to low-1 only 0
    // mid = low to mid-1 only 1
    // high = high+1 to n only 2
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        } else if (nums[mid] === 1) {
            mid++
        } else {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }
    }
}

const arr = [1, 2, 0, 2, 0, 1, 1, 0];
sort(arr)
console.log(arr);