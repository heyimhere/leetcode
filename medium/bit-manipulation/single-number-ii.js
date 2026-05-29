// TODO: implement
// LC #137 — Single Number II
//
// Given an integer array `nums` where every element appears EXACTLY THREE
// times except for one, which appears once, return the one that appears once.
//
// You must implement a solution with O(n) runtime and O(1) extra space —
// so a hashmap/Set is not allowed (it's the "easy" cheat).
//
// Example:
//   nums = [2, 2, 3, 2]      → 3
//   nums = [0, 1, 0, 1, 0, 1, 99] → 99
//
// Approach 1 (bitwise: count set bits modulo 3):
//   For each of the 32 bit positions:
//     - Count how many numbers in nums have that bit set.
//     - That count mod 3 is the bit of the answer at that position.
//       Why: every "triple" contributes 0 (mod 3); the loner is the only
//       contributor mod 3.
//   Reconstruct the answer bit by bit.
//
//   Handle the sign bit (position 31) carefully in JS so the result keeps
//   the correct sign — use `| 0` at the end to coerce to a signed 32-bit int.
//
//   Time:  O(32 * n) = O(n)
//   Space: O(1)
//
// Approach 2 (state-machine bit DP — the elegant one):
//   Track two ints, `ones` and `twos`, representing:
//     ones = bits that have appeared 1 (mod 3) times so far
//     twos = bits that have appeared 2 (mod 3) times so far
//   For each num:
//     ones = (ones ^ num) & ~twos
//     twos = (twos ^ num) & ~ones
//   After the loop, `ones` holds the lone number.
//
//   This is "counting mod 3 in parallel across all 32 bit positions" using
//   only XOR and AND. Worth understanding once, but the count-set-bits
//   version is much easier to explain in an interview.
//
//   Time:  O(n)
//   Space: O(1)
//
// Why the obvious approaches don't qualify:
//   - HashMap of counts:  O(n) time, O(n) space ← violates O(1) space.
//   - Sort + scan:        O(n log n) time ← violates O(n) time.
//   - sum/3 trick (used in "every other appears twice"): doesn't generalize
//     to triples without a set of seen elements.
//
// Edge Cases:
//   - The lone number is negative                  → make sure to coerce sign
//   - The lone number is 0                         → still works
//   - Single-element input                         → that's the answer
//   - All numbers are nonzero but lone bit at sign → JS bitwise treats as
//     signed 32-bit; `| 0` at the end is your friend

/**
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = (nums) => {
  // your code here
};

console.log('=== LC #137 Single Number II ===\n');

console.log('Test 1 — [2,2,3,2]:');
console.log(singleNumber([2, 2, 3, 2]));
// Expected: 3

console.log('\nTest 2 — [0,1,0,1,0,1,99]:');
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
// Expected: 99

console.log('\nTest 3 — Single element:');
console.log(singleNumber([42]));
// Expected: 42

console.log('\nTest 4 — Negative loner:');
console.log(singleNumber([-2, -2, -2, -1]));
// Expected: -1

console.log('\nTest 5 — Zero loner:');
console.log(singleNumber([1, 1, 1, 0]));
// Expected: 0
