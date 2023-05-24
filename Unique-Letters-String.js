function uniqueLetterString(arr) {
  let start = 0;
  let end = 0;
  let set = new Set();
  let maxLength = 0;

  while (start < arr.length && end < arr.length) {
    if (!set.has(arr[end])) {
      set.add(arr[end]);
      end++;
    } else {
      set.delete(arr[start]);
      start++;
    }

    if (set.size > maxLength) maxLength = set.size;
    console.log(start, arr[start], end, arr[end], set.size);
  }

  set.forEach(function (value) {
    console.log(value);
  });

  return maxLength;
}

console.log(uniqueLetterString("thisishowwedoit"));
