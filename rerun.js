// TODO: implement
// LC #904 — Fruit Into Baskets
//
// You're given an array `fruits` where fruits[i] is the type of fruit on
// the i-th tree. You have two baskets; each basket can hold ONE type of
// fruit, unlimited quantity. Pick fruits going left-to-right starting
// from any tree, taking the fruit at each tree until you'd have to add
// a third type to a basket. Return the MAX number of fruits you can pick.
//
// (Equivalent to: longest subarray with at most 2 distinct values.)
//
// Example:
//   fruits = [1,2,1]                → 3
//   fruits = [0,1,2,2]              → 3   ([1,2,2])
//   fruits = [1,2,3,2,2]            → 4   ([2,3,2,2])
//
// Approach (sliding window with HashMap of counts):
//   left = 0; counts = new Map(); best = 0
//   for right in 0..n-1:
//     counts.set(f[right], (counts.get(f[right]) ?? 0) + 1)
//     while counts.size > 2:
//       counts.set(f[left], counts.get(f[left]) - 1)
//       if counts.get(f[left]) === 0 → counts.delete(f[left])
//       left++
//     best = max(best, right - left + 1)
//   return best
//
// Why HashMap (not 26-array):
//   Fruit types may be arbitrary ints. The set of types in the window
//   is at most 3 during shrinking — small but unbounded.
//
// Time:  O(n)   (each tree enters and leaves the window at most once)
// Space: O(1)   (window always holds ≤ 3 entries)
//
// Edge Cases:
//   - Single fruit type                → n
//   - All distinct types               → 2 (or fewer if length < 2)
//   - Length 0 or 1                    → that length
//   - Two types alternating long runs  → full length

/**
 * @param {number[]} fruits
 * @returns {number}
 */
const totalFruit = (fruits) => {
  // your code here
  let left = 0;
  const counts = new Map();
  let best = 0;

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];
    counts.set(fruit, (counts.get(fruit) ?? 0) + 1);

    while (counts.size > 2) {
      const leftFruit = fruits[left];
      counts.set(leftFruit, counts.get(leftFruit) - 1);
      if (counts.get(leftFruit) === 0) counts.delete(leftFruit);
      left++;
    }

    best = Math.max(best, right - left + 1);
  }
  return best;
};

console.log('=== LC #904 Fruit Into Baskets ===\n');

console.log('Test 1:');
console.log(totalFruit([1, 2, 1]));
// Expected: 3

console.log('\nTest 2:');
console.log(totalFruit([0, 1, 2, 2]));
// Expected: 3

console.log('\nTest 3:');
console.log(totalFruit([1, 2, 3, 2, 2]));
// Expected: 4

console.log('\nTest 4 — all same:');
console.log(totalFruit([5, 5, 5, 5]));
// Expected: 4
