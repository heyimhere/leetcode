// TODO: implement
// LC #41 — First Missing Positive
//
// Given an UNSORTED integer array, return the smallest POSITIVE integer
// that is NOT in the array. Must be O(n) time and O(1) extra space.
//
// Example:
//   [1,2,0]         → 3
//   [3,4,-1,1]      → 2
//   [7,8,9,11,12]   → 1
//
// Approach (cyclic in-place sort — the classic O(1) trick):
//   Observation: the answer is always in [1, n+1] (where n = nums.length).
//
//   Pass 1 — place each value v in [1, n] at index v - 1:
//     for i in 0..n-1:
//       while 1 <= nums[i] <= n AND nums[nums[i] - 1] !== nums[i]:
//         swap nums[i] with nums[nums[i] - 1]
//
//   Pass 2 — find the first index i where nums[i] !== i + 1:
//     return i + 1.
//     If every slot matches, return n + 1.
//
// Why "n + 1" is the cap:
//   Even if [1..n] are all present, the smallest missing positive is n+1.
//
// Why the while loop terminates:
//   Each swap places one value at its correct slot. After at most n total
//   swaps across all iterations, no more swaps occur. Total work: O(n).
//
// Alternative (HashSet): O(n) time but O(n) space. Mention if O(1) is not required.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Empty array              → 1
//   - All negative             → 1
//   - All in [1..n] sorted     → n + 1
//   - Duplicates within range  → handled by the "value already there" check

/**
 * @param {number[]} nums
 * @returns {number}
 */
const firstMissingPositive = (nums) => {
  // your code here
};

console.log('=== LC #41 First Missing Positive ===\n');

console.log('Test 1:');
console.log(firstMissingPositive([1, 2, 0]));
// Expected: 3

console.log('\nTest 2:');
console.log(firstMissingPositive([3, 4, -1, 1]));
// Expected: 2

console.log('\nTest 3:');
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
// Expected: 1

console.log('\nTest 4 — empty:');
console.log(firstMissingPositive([]));
// Expected: 1
