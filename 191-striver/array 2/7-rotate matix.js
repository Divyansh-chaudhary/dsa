const rotateMatrix = (matrix) => {
    // brute force with  O(n2) time needs new array O(n2)
    // const result = Array.from({ length: matrix.length }, () =>
    //     Array.from({ length: matrix.length }),
    // );
    // for (let i = 0, k = matrix.length - 1; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix.length; j++) {
    //         result[j][k] = matrix[i][j];
    //     }
    //     k--;
    // }
    // matrix =  result;

    // O(n2) time - O(1) space
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix.length - 1;
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
            left++;
            right--;
        }
    }
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
rotateMatrix(matrix);
console.log(matrix);

