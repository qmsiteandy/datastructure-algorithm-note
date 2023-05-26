function quickSort(arr) {
  function sort(l, r) {
    if (l < r) {
      let x = partition(l, r); // x項已經排好正確位置
      sort(l, x - 1);
      sort(x + 1, r);
    }
  }

  function partition(l, r) {
    let pivot = arr[r];
    let j = l - 1; // record less group rBound
    for (let i = l; i < r; i++) {
      if (arr[i] < pivot) {
        j++;
        swap(j, i);
      }
    }
    swap(j + 1, r);
    return j + 1;
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  sort(0, arr.length - 1);
  return arr;
}

let test = [];
for (let i = 0; i < 7; i++) {
  test.push(Math.floor(Math.random() * 100));
}

console.log(quickSort(test));
