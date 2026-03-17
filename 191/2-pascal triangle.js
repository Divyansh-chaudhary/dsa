// pascal triangle 1
// input n = 5
// output
//     [1]
//    [1, 1]
//   [1, 2, 1]
//  [1, 3, 3, 1]
// [1, 4, 6, 4, 1]

const makePascalArray = (n) => {
    const result = Array.from({ length: n }, () => new Array())
    for (let r = 0; r < result.length; r++) {
        for (let c = 0; c < r + 1; c++) {
            if (r === 0 || r === 1 || c === 0 || c === r) {
                result[r].push(1);
            } else {
                result[r].push(result[r - 1][c - 1] + result[r - 1][c])
            }
        }
    }
    console.log(result);
}

makePascalArray(6);