// TODO: implement
// LC #170 — Two Sum III — Data Structure Design
//
// Design a data structure that supports:
//   add(number)   — add a number into the structure
//   find(value)   — return true iff any pair of numbers sums to `value`
//
// Example:
//   add(1); add(3); add(5);
//   find(4) → true   (1 + 3)
//   find(7) → false  (no pair sums to 7)
//
// Approach (HashMap of counts):
//   counts: Map<number, count>.
//   - add(n): counts.set(n, (counts.get(n) ?? 0) + 1)
//   - find(target):
//       For each (n, c) in counts:
//         complement = target - n
//         if n === complement:
//           // need two copies of the same number
//           if c >= 2 → return true
//         else if counts.has(complement):
//           return true
//       return false
//
// Why a Map (not a Set):
//   The same-number case (e.g. find(6) with [3,3] present) requires knowing
//   we have ≥2 copies of 3. A Set can't express that — a Map of counts can.
//
// Alternative: maintain a sorted array and two-pointer on find.
//   add: O(n) (insertion sort), find: O(n).
//   The HashMap version trades faster `add` (O(1)) for slightly more
//   expensive `find` worst case.
//
// Time:
//   add: O(1)
//   find: O(n) in number of unique entries
// Space: O(n)
//
// Edge Cases:
//   - find before any add               → false
//   - find(2 * x) when x added once     → false
//   - find(2 * x) when x added twice    → true
//   - large stream of duplicates        → counts grow per-entry, not per-add

class TwoSum {
  constructor() {
    // your code here
  }

  /**
   * @param {number} number
   * @returns {void}
   */
  add(number) {
    // your code here
  }

  /**
   * @param {number} value
   * @returns {boolean}
   */
  find(value) {
    // your code here
  }
}

console.log('=== LC #170 Two Sum III — Data Structure ===\n');

console.log('Test 1 — basic find:');
const ts = new TwoSum();
ts.add(1); ts.add(3); ts.add(5);
console.log(ts.find(4)); // Expected: true  (1+3)
console.log(ts.find(7)); // Expected: false

console.log('\nTest 2 — same-number pair:');
const ts2 = new TwoSum();
ts2.add(3);
console.log(ts2.find(6)); // Expected: false (only one 3)
ts2.add(3);
console.log(ts2.find(6)); // Expected: true  (two 3s)

console.log('\nTest 3 — find before add:');
const ts3 = new TwoSum();
console.log(ts3.find(0)); // Expected: false
