// 範例解答
// 但會有個 BUG 出在比對環節：如果 str2 有 str1 沒有的 letter?
// 補：解答結果不會出錯，因為如果 str2 有 str1 沒有的 letter，那肯定會有另一個 letter 次數變少
function sameFrequency(str1, str2) {
  let counter1 = {};
  let counter2 = {};

  // 如果兩字串長度不同，肯定頻率不符
  if (str1.length !== str2.length) return false;

  // 建立 counter object 建立各 letter 次數
  for (let i of str1) {
    if (counter1[i]) counter1[i]++;
    else counter1[i] = 1;
  }

  for (let i of str2) {
    if (counter2[i]) counter2[i]++;
    else counter2[i] = 1;
  }

  // 比對相符
  for (let key in counter1) {
    if (!counter2[key]) return false; //如果 str1 的 letter 在 str2 中找不到
    if (counter1[key] !== counter2[key]) return false; //如果 letter 次數不同
  }
  return true;
}

// 解法二
//  邏輯：
//   //  迴圈一使用 counter(Object) 紀錄 str1 各 letter 次數
//   //  迴圈二將 counter 減去 str2 各 letter 次數
//   //  如果兩字串頻率相同，最後 counter 應為 empty object
// function sameFrequency(str1, str2) {
//   let counter = {};

//   for (let l of str1) {
//     if (!counter[l]) {
//       counter[l] = 1;
//     } else {
//       counter[l]++;
//     }
//   }

//   for (let l of str2) {
//     // 如果有不存在的 key 代表內容不同，直接 return false
//     if (!counter[l]) {
//       return false;
//     }
//     // 對應 key 的次數 -1
//     else {
//       counter[l]--;
//       if (counter[l] === 0) delete counter[l]; // remove key
//     }
//   }

//   // 如果 counter 內容為空，代表 str1 和 str2 內容頻率相符
//   return Object.keys(counter).length === 0;
// }

let str1 = "abcc";
let str2 = "abcc";
console.log(sameFrequency(str1, str2)); // true
