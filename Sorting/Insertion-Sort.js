// function insertionSort(arr) {
//   for (let i = 1; i <= arr.length - 1; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && key < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
}

let test = [];
for (let i = 0; i < 10; i++) {
  test.push(Math.floor(Math.random() * 100));
}
console.log("test", test);

insertionSort(test);
console.log(test);
