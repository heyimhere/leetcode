// TODO: implement
// LC #763 — Partition Labels
//
// Given a string s of lowercase letters, partition it into as many parts
// as possible so that EACH LETTER appears in AT MOST ONE part. Return a
// list of the part SIZES (in order).
//
// Example:
//   s = "ababcbacadefegdehijhklij"  → [9, 7, 8]
//     parts: "ababcbaca" | "defegde" | "hijhklij"
//   s = "eccbbbbdec"               → [10]
//
// Approach (last-occurrence + greedy two-pointer scan):
//   1. last: Map<char, lastIndex>  — record the last index of each char.
//   2. Walk s with `start` and `end` initialized to 0:
//        For i from 0..n-1:
//          end = max(end, last[s[i]])
//          if i === end:
//            push (end - start + 1)
//            start = i + 1
//   3. Return result.
//
// Why this works:
//   The smallest valid partition ending at any point must extend to the
//   last occurrence of EVERY char it contains. Each step we extend `end`
//   if the current char's last occurrence is further out. When i finally
//   catches up to `end`, the partition is complete.
//
// Time:  O(n)  (one pass for last-occurrence, one to scan)
// Space: O(1)  (26-letter alphabet)
//
// Edge Cases:
//   - Single char         → [1]
//   - All unique chars    → [1, 1, 1, ...] of length n
//   - All same char       → [n]

/**
 * @param {string} s
 * @returns {number[]}
 */
const partitionLabels = (s) => {
  // your code here
};

console.log('=== LC #763 Partition Labels ===\n');

console.log('Test 1:');
console.log(partitionLabels('ababcbacadefegdehijhklij'));
// Expected: [9,7,8]

console.log('\nTest 2:');
console.log(partitionLabels('eccbbbbdec'));
// Expected: [10]

console.log('\nTest 3 — all unique:');
console.log(partitionLabels('abcdef'));
// Expected: [1,1,1,1,1,1]

console.log('\nTest 4 — all same:');
console.log(partitionLabels('aaaa'));
// Expected: [4]
