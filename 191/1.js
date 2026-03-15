// set matrix zero
// matrix contains 0 
// set whole row to 0 which contains 0, also set the whole column to 0 which contains 0

const setMatrixZero = (matrix) => {
    const rows = new Set()
    const cols = new Set()
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 0) {
                rows.add(r);
                cols.add(c)
            }
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (rows.has(r) || cols.has(c)) {
                matrix[r][c] = 0
            }
        }
    }

}

const matrix = [[1, 1, 1], [0, 1, 1], [1, 0, 1]]
console.log('matrix :>> ', matrix);
setMatrixZero(matrix)
console.log(matrix);

/**
 * run loop over all
 * find index 1-0, 2-1
 */