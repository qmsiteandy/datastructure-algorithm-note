function sameFrequency(str1, str2) {
  //  邏輯：
  //  迴圈一使用 counter(Object) 紀錄 str1 各 letter 次數
  //  迴圈二將 counter 減去 str2 各 letter 次數
  //  如果兩字串頻率相同，最後 counter 應為 empty object
  let counter = {};

  for (let l of str1) {
    if (!counter[l]) {
      counter[l] = 1;
    } else {
      counter[l]++;
    }
  }

  for (let l of str2) {
    // 如果有不存在的 key 代表內容不同，直接 return false
    if (!counter[l]) {
      return false;
    }
    // 對應 key 的次數 -1
    else {
      counter[l]--;
      if (counter[l] === 0) delete counter[l]; // remove key
    }
  }

  // 如果 counter 內容為空，代表 str1 和 str2 內容頻率相符
  return Object.keys(counter).length === 0;
}

let str1 = "abcc";
let str2 = "abcc";
console.log(sameFrequency(str1, str2)); // true
