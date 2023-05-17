function averagePair(arr, avg) {
  let result = [];
  let obj = {}; // 用 obj 紀錄有哪些項目，因為 object access：O(1)

  for (let i of arr) {
    obj[i] = true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let need = avg * 2 - arr[i]; // 需要pair的value
    // 如果有對應的項目
    if (obj[need]) {
      result.push([arr[i], need]);
    }
  }

  return result;
}

let arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
let avg = 1.5;
console.log(averagePair(arr, avg)); //[ [ -11, 14 ], [ 0, 3 ], [ 1, 2 ], [ 2, 1 ], [ 3, 0 ], [ 14, -11 ] ]
