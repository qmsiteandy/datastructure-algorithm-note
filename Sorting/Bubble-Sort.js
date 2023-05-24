function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let test = [];
for (let i = 0; i < 10; i++) {
  test.push(Math.floor(Math.random() * 100));
}

bubbleSort(test);
console.log(test);
