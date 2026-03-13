const maxOnes = (arr) => {
    let max = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0
        }
    }
    max = Math.max(max, count);
    return max;
}

console.log(maxOnes([0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]));

