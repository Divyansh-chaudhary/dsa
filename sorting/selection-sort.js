const selectionSort = (arr) => {
  console.log("arr.length :>> ", arr.length);
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    console.log("i < arr.length :>> ", i < arr.length);
    // let j = i;
    // console.log("object", i);
    // if (i === 10) return;
    // while (j < arr.length) {
    //   min = Math.min(arr[j], min);
    //   j++;
    // }
    // const temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    // min = Infinity;
  }
};
console.log(selectionSort([64, 25, 12, 22, 11]));
