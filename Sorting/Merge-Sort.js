function merge(A, B) {
  let i = 0;
  let j = 0;
  let merge = [];
  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      merge.push(A[i]);
      i++;
    } else {
      merge.push(B[j]);
      j++;
    }
  }
  while (i < A.length) {
    merge.push(A[i]);
    i++;
  }
  while (j < B.length) {
    merge.push(B[j]);
    j++;
  }
  return merge;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle, arr.length))
  );
}

let test = [];
for (let i = 0; i < 20; i++) {
  test.push(Math.floor(Math.random() * 100));
}

console.log(mergeSort(test));
