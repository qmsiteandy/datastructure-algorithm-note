function fs(n) {
  if (n >= 2) {
    let temp = fs(n - 1) + fs(n - 2);
    return temp;
  } else {
    return n;
  }
}

let sequence = [];
for (let i = 0; i < 10; i++) {
  sequence.push(fs(i));
}
console.log(sequence);

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
