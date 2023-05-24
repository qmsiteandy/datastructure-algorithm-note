function minSubArray(arr, k) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    // end 向右，值到 total >= k
    if (total < k && end < arr.length) {
      total += arr[end];
      end++;
    }
    // 在 total >= k 的情況下，start 向右
    else if (total >= k) {
      let currentLength = end - start + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        total -= arr[start];
      }
      start++;
    }
    // 如果 end 超出 arr
    else if (end >= arr.length) break;

    console.log(start, end, total);
  }

  return minLength !== Infinity ? minLength : -1;
}

let arr = [8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12];
let k = 60;
console.log(minSubArray(arr, k));
