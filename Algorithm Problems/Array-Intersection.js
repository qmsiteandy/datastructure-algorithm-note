function intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2); // 將兩陣列內容串一起
  let counter = {};

  arr3.forEach((i) => {
    if (!counter[i]) {
      counter[i] = 1;
    } else {
      counter[i]++;
      result.push(i);
    }
  });
  console.log(counter);
  return result;
}

let arr1 = [1, 2, 3, 7, 9, 19];
let arr2 = [2, 3, 4, 7, 19, 25];

console.log(intersection(arr1, arr2));

// result -> [ 2, 3, 7, 19 ]

/* conter -> {  '1': 1, 
                '2': 2, 
                '3': 2, 
                '4': 1, 
                '7': 2, 
                '9': 1, 
                '19': 2, 
                '25': 1 
            }*/
