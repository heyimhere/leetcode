// TODO: implement
// LC #38 — Count and Say
//
// The count-and-say sequence is defined recursively:
//   countAndSay(1) = "1"
//   countAndSay(n) = "say" of countAndSay(n-1), i.e. describe the previous
//                    string as "<count><digit><count><digit>...".
//
// Example:
//   1 → "1"
//   2 → "11"      (one 1)
//   3 → "21"      (two 1s)
//   4 → "1211"    (one 2, one 1)
//   5 → "111221"  (one 1, one 2, two 1s)
//
// Approach (iterative run-length encoding):
//   Start with s = "1". Repeat n-1 times:
//     Walk s, group consecutive identical digits, append "<count><digit>" to
//     the next string. Assign s = next.
//   Return s.
//
// Why iterative beats recursion here:
//   Each level uses the previous level's WHOLE string — recursion would
//   still need to materialize each level. Iteration is more straightforward
//   and avoids stack depth concerns for large n.
//
// Time:  O(n × L)  where L is the length of the final string (grows ~30%
//                  per step until it stabilizes)
// Space: O(L)     for the current and next strings
//
// Edge Cases:
//   - n = 1                  → "1"
//   - large n (say, 30)      → string gets long but stays manageable
//   - the digit '0' never appears in this sequence by construction

/**
 * @param {number} n
 * @returns {string}
 */
const countAndSay = (n) => {
  // your code here
};

console.log('=== LC #38 Count and Say ===\n');

console.log('Test 1 — n=1:');
console.log(countAndSay(1));
// Expected: "1"

console.log('\nTest 2 — n=2:');
console.log(countAndSay(2));
// Expected: "11"

console.log('\nTest 3 — n=4:');
console.log(countAndSay(4));
// Expected: "1211"

console.log('\nTest 4 — n=5:');
console.log(countAndSay(5));
// Expected: "111221"

console.log('\nTest 5 — n=6:');
console.log(countAndSay(6));
// Expected: "312211"
