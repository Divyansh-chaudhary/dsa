/**
 * O(m*n) space and time
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const arr = Array.from({ length: m }, () => Array.from({ length: n }));
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row === 0 || col === 0) arr[row][col] = 1
            else arr[row][col] = arr[row - 1][col] + arr[row][col - 1];
        }
    }
    return arr[m - 1][n - 1]
};