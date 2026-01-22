let count = 0;
for (let i = 0; i < 10; i++) {
  let str = "";
  for (let j = 0; j < 9; j++) {
    str += j >= count && j < 9 - count ? "*" : " ";
  }
  count++;
  console.log(str);
}

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *
