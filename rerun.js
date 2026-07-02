// LC #217 — Contains Duplicate
//
// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.
//
// Examples:
//   [1,2,3,1]             -> true
//   [1,2,3,4]             -> false
//   [1,1,1,3,3,4,3,2,4,2] -> true
//
// Intuition:
//   Classic "have I seen this before?" problem — the archetype for a Set.
//   Walk the array once; for each value, ask the Set if it's already there.
//   If yes, we found a duplicate. If not, add it and keep going.
//
// Approach (Set, one pass):
//   - seen = new Set()
//   - for each n in nums: if seen.has(n) return true; else seen.add(n)
//   - return false
//   Time: O(n)   Space: O(n)
//
// Alternate approaches:
//   1) One-liner: `new Set(nums).size !== nums.length`
//      Same O(n)/O(n), but always scans the whole array — the loop can bail
//      early on the first duplicate.
//   2) Sort + scan adjacent pairs.
//      Time: O(n log n)   Space: O(1) (ignoring sort's stack).
//      Trade time for space when memory is tight.

const containsDuplicate = (nums) => {
  const seen = new Set();

  for (let n of nums) {
    if (seen.has(n)) return true;

    seen.add(n);
  }

  return false;
}

console.log('[1,2,3,1]             ->', containsDuplicate([1, 2, 3, 1]));             // true
console.log('[1,2,3,4]             ->', containsDuplicate([1, 2, 3, 4]));             // false
console.log('[1,1,1,3,3,4,3,2,4,2] ->', containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log('[]                    ->', containsDuplicate([]));                        // false
console.log('[7]                   ->', containsDuplicate([7]));                       // false
