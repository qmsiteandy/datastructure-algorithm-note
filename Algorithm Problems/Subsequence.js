function isSubscequence(full, sub) {
  // 子字串的 pointer
  let p_sub = 0;

  // 兩 pointer 都還沒超出範圍才進入迴圈內容
  // for 每次迴圈 p_full 只向下一個 letter
  for (let p_full = 0; p_full < full.length && p_sub < sub.length; p_full++) {
    // 如果字有配對到，p_sub 後移
    if (full[p_full] == sub[p_sub]) p_sub++;
  }

  // 迴圈結束後，如果是有效的 Sub，p_sub 應該指到 sub.length + 1
  return p_sub >= sub.length;
}

let full = "brooklyn";
let sub = "book";
console.log(isSubscequence(full, sub));
