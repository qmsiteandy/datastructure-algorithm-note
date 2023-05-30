// Longest Common Subsequence Problem
// with Recursion method

let s1 = "ATTTGGCTA";
let s2 = "TTAGCCAT";

function LCS_Recursion(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;

  // if s1 last char equal s2 last char
  if (s1[s1.length - 1] === s2[s2.length - 1]) {
    return 1 + LCS_Recursion(s1.slice(0, -1), s2.slice(0, -1));
  }
  // find LCS of 2 substring with s1 or s2 last char removed
  else {
    return Math.max(
      LCS_Recursion(s1, s2.slice(0, -1)),
      LCS_Recursion(s1.slice(0, -1), s2)
    );
  }
}

console.log(LCS_Recursion(s1, s2));
