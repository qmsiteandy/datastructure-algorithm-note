function maxSum(arr, size) {
  if (size > arr.length) return null;

  let max = 0;
  let tempMax = 0;
  // 先將前 n 項相加當成 max 值
  for (let i = 0; i < size; i++) tempMax += arr[i];
  max = tempMax;

  // 每次 slide，tempMax 減去舊項數值增加新項值
  for (let i = 0; i < arr.length - size; i++) {
    tempMax = tempMax - arr[i] + arr[i + size];
    if (tempMax > max) max = tempMax;
  }

  return max;
}

let arr = [2, 7, 3, 0, 6, 1, -5, -12, -11];
let size = 3;
console.log(maxSum(arr, size));
