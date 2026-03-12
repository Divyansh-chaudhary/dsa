let count = 4;
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j <= 8; j++) {
    str += j >= count && j < 9 - count ? "*" : " ";
  }
  count--;
  console.log(str);
}

//     *
//    ***
//   *****
//  *******
// *********
