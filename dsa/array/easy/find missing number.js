// if input array contains 1 to n numbers
// constraint, n number is always present
const findMissingNumber = (arr) => {
    let max = 0;
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++) {
        max = Math.max(max, arr[i])
        sum += arr[i]
    }
    const nSum = ((max*(max+1))/2);
    return sum === nSum ? max+1 : nSum - sum ; 
}

console.log(findMissingNumber([8,3,6,2,5,7,4]));