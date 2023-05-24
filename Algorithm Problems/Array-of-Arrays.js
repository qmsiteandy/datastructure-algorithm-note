// 使用 clousure 閉包建立函式
function collecter(arrs) {
  let result = [];
  helper(arrs);
  return result;

  function helper(arrs) {
    for (content of arrs) {
      // 如果是 Array 再進行 collecter
      if (Array.isArray(content)) {
        helper(content);
      }
      // 如果是字串，插到 result 中
      else {
        result.push(content);
      }
    }
  }
}

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
console.log(collecter(arrs));
