// 2^8 = (2^2)^4 = 4^4
// divide and conquer
// because by squaring the base and halving the exponent we can reach the same conclustion
// if the exponent is odd, take out 1 exponent and do same for base
// O(log n) time

let counter = 0
const power = (base, exponent) => {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    if (exponent % 2 === 0) return power(base * base, Math.floor(exponent / 2))
    return base * power(base, exponent - 1)
}
const myPow = (base, exponent) => {
    if (exponent < 0) {
        return 1 / power(base, -exponent)
    }
    return power(base, exponent)
}
const args = [2.00000, -2]
console.log(myPow(...args), Math.pow(...args));