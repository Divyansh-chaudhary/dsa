const getUnionofArray = (arr1, arr2) => {
  let left = 0;
  let right = 0;
  const results = [];
  while (left < arr1.length || right < arr2.length) {
    // these two if condition doesn't allow duplicates
    if (arr1[left] === results[results.length - 1]) {
      left++;
      continue;
    }
    if (arr2[right] === results[results.length - 1]) {
      right++;
      continue;
    }

    // if left pointer is at end push all arr2 in results except duplicates
    if (left === arr1.length) {
      for (let i = right; i < arr2.length; i++)
        if (arr2[i] !== results[results.length - 1]) results.push(arr2[i]);
      break;
    }
    // if right pointer is at end push all arr1 in results except duplicates
    if (right === arr2.length) {
      for (let i = left; i < arr1.length; i++)
        if (arr1[i] !== results[results.length - 1]) results.push(arr1[i]);
      break;
    }

    // push smaller number or equal into results
    if (arr1[left] < arr2[right]) {
      results.push(arr1[left]);
      left++;
    } else if (arr1[left] > arr2[right]) {
      results.push(arr2[right]);
      right++;
    } else {
      results.push(arr2[right]);
      right++;
      left++;
    }
  }
  return results;
};
const arr1 = [10, 20, 20, 20, 30, 30, 30];
const arr2 = [1, 2];
console.log(JSON.stringify(getUnionofArray(arr1, arr2)));
