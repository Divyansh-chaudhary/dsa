// Stock Buy And Sell
// Problem Statement: You are given an array of prices where prices[i] is the price of a given 
// stock on an ith day.You want to maximize your profit by choosing a single day to buy 
// one stock and choosing a different day in the future to sell that stock.Return the maximum 
// profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

const buySellStock = (arr) => {
    let profit = 0;
    let min = Infinity;

    arr.forEach(price => {
        min = Math.min(min, price);
        profit = Math.max(profit, price - min);
    })

    return profit
}

console.log(buySellStock([7, 1, 5, 3, 6, 4])); // 5
console.log(buySellStock([9, 3, 8, 2, 6, 4])); // 5
console.log(buySellStock([7, 6, 4, 3, 1])); // 0