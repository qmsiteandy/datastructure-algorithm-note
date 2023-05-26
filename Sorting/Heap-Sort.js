function heapSort(arr) {
  function buildMaxHeap() {
    for (let i = arr.length - 1; i >= 0; i--) {
      maxHeapify(i);
    }
  }

  function maxHeapify(i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (arr[left] > arr[largest] && left < arr.length) largest = left;
    if (arr[right] > arr[largest] && right < arr.length) largest = right;
    if (largest !== i) {
      swap(i, largest);
      maxHeapify(largest);
    }
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function exportSort() {
    let sortArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
      swap(0, i);
      let pop = arr.pop();
      sortArr.push(pop);
      maxHeapify(0);
    }
    return sortArr;
  }

  buildMaxHeap();
  return exportSort();
}

let test = [];
for (let i = 0; i < 7; i++) {
  test.push(Math.floor(Math.random() * 100));
}

console.log(heapSort(test));
