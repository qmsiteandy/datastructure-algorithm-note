function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

let test = [];
for (let i = 0; i < 10; i++) {
  test.push(Math.floor(Math.random() * 100));
}

selectionSort(test);
console.log(test);
