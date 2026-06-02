// TODO: implement
// LC #17 — Letter Combinations of a Phone Number
//
// Given a string `digits` of 2-9, return all possible LETTER combinations
// the number could represent on a phone keypad.
//
// Keypad mapping:
//   2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz
//
// Example:
//   "23"  → ["ad","ae","af","bd","be","bf","cd","ce","cf"]
//   ""    → []
//   "2"   → ["a","b","c"]
//
// Approach (backtracking / DFS over digits):
//   const map = { "2":"abc", "3":"def", ..., "9":"wxyz" }
//   backtrack(idx, curr):
//     if idx === digits.length → result.push(curr); return
//     for c in map[digits[idx]]:
//       backtrack(idx + 1, curr + c)
//   Call backtrack(0, "").
//
// Alternative (iterative BFS):
//   queue = [""]
//   for d in digits:
//     letters = map[d]
//     queue = [for s of queue, for c of letters: s + c]
//   return queue
//
// Why backtracking is the standard answer:
//   It generalizes to many similar enumeration problems (subsets,
//   permutations, partitioning). Same structure: choose, recurse, undo.
//
// Time:  O(4^N × N)   N = len(digits); 4 letters max per digit
// Space: O(N)         recursion + each combination is length N
//
// Edge Cases:
//   - Empty digits         → []
//   - Single digit         → that digit's letters as singletons
//   - Long digits string   → exponential output; LC bounds N ≤ 4

const KEYPAD = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

/**
 * @param {string} digits
 * @returns {string[]}
 */
const letterCombinations = (digits) => {
  // your code here
};

console.log('=== LC #17 Letter Combinations of a Phone Number ===\n');

console.log('Test 1:');
console.log(letterCombinations('23'));
// Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log('\nTest 2 — empty:');
console.log(letterCombinations(''));
// Expected: []

console.log('\nTest 3 — single digit:');
console.log(letterCombinations('2'));
// Expected: ["a","b","c"]

console.log('\nTest 4 — digit with 4 letters:');
console.log(letterCombinations('7'));
// Expected: ["p","q","r","s"]
