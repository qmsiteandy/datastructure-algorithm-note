// Longest Common Subsequence Problem
// with Dynamic Programming method

let s1 = "ATTTGGCTA";
let s2 = "TTAGCCAT";

let m = s1.length;
let n = s2.length;
let table1 = []; // record length of every subproblem
let table2 = []; // record direction of subproblem

// init m*n table1 with first row & column setting 0
for (let i = 0; i <= m; i++) {
  table1.push([]);
  for (let j = 0; j <= n; j++) {
    table1[i].push(j !== 0 ? null : 0);
  }
}
for (let j = 0; j <= n; j++) {
  table1[0][j] = 0;
}

// TABLE2
for (let i = 0; i <= m; i++) {
  table2.push([]);
  for (let k = 0; k <= n; k++) {
    table2[i].push(null);
  }
}

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    // char match
    if (s1[i - 1] === s2[j - 1]) {
      table1[i][j] = 1 + table1[i - 1][j - 1];
      table2[i][j] = "↖"; // subproblem direction is left up (i-1 & j-1)
    } else if (table1[i - 1][j] >= table1[i][j - 1]) {
      table1[i][j] = table1[i - 1][j];
      table2[i][j] = "↑"; // subproblem direction is up (i-1)
    } else if (table1[i][j - 1] >= table1[i - 1][j]) {
      table1[i][j] = table1[i][j - 1];
      table2[i][j] = "←"; // subproblem direction is left (j-1)
    }
  }
}

// print the m*n table1
for (let i = 0; i <= m; i++) {
  let row = "";
  for (let j = 0; j <= n; j++) {
    row += table1[i][j] + " ";
  }
  console.log(row);
}

// print the m*n table2
for (let i = 0; i <= m; i++) {
  let row = "";
  for (let j = 0; j <= n; j++) {
    row += table2[i][j] + " ";
  }
  console.log(row);
}

let result = "";
function printLCS(i, j) {
  if (i == 0 || j == 0) {
    return;
  }
  if (table2[i][j] == "↖") {
    printLCS(i - 1, j - 1);
    result += s1[i - 1];
  } else if (table2[i][j] == "↑") {
    printLCS(i - 1, j);
  } else {
    printLCS(i, j - 1);
  }
}

printLCS(s1.length, s2.length);
console.log(result);
