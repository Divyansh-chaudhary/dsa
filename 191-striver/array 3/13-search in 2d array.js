const findElementIn2dArray = (arr, target) => {
    let left = 0;
    let right = arr.length * arr[0].length - 1;
    while (left <= right) {
        const mid = left + Math.ceil((right - left) / 2);
        const row = Math.floor(mid / arr[0].length);
        const col = mid % arr[0].length;
        if (arr[row][col] > target) right = mid - 1;
        else if (arr[row][col] < target) left = mid + 1;
        else return true;
    }
    return false;
};