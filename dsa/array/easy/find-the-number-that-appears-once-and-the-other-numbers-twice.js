const find = (arr) => {
    const map = {}
    arr.forEach(num => {
        if (map[num]) map[num] += 1
        else map[num] = 1;
    })
    for (let key in map)
        if (map[key] === 1) return key
    return -1;

}

const find2 = (arr) => {
    let xorr = 0;

    // XOR all elements — duplicates cancel out
    for (let num of arr) {
        console.log(xorr, num, xorr ^ num);
        xorr ^= num;
    }

    return xorr;
}


console.log(find([1, 2, 2, 3, 3]));
console.log(find2([2, 2, 3, 3, 4]));
