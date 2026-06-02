// TODO: implement
// coding interview sample (Karat-style)

/**
 * Co-Purchased Products — Part 2 — Recommendations
 *
 * Extends `co-purchased-products.js`. Part 1 returned ALL items frequently
 * co-purchased with a target item. Part 2 sharpens to a RECOMMENDATION
 * problem: given a target item AND the user's already-purchased set,
 * return the TOP K items most often co-purchased with target — EXCLUDING
 * items the user already owns.
 *
 * Input:
 *   transactions: Array<Array<string>>   (each user's purchase basket)
 *   target: string                       (item we're recommending alongside)
 *   alreadyOwned: Set<string>            (items to exclude)
 *   k: number
 * Output:
 *   Array<{ item: string, count: number }>  sorted by count desc, item asc
 *
 * Example:
 *   transactions = [
 *     ["milk","bread","butter"],
 *     ["milk","eggs","bread"],
 *     ["milk","bread"],
 *     ["bread","cheese","butter"],
 *   ]
 *   target = "bread"
 *   alreadyOwned = new Set(["milk"])
 *   k = 2
 *   → [{ item: "butter", count: 2 }, { item: "cheese", count: 1 }]
 *     (milk co-occurs 3x but is excluded; eggs occurs 1x, count tie)
 *
 * Approach:
 *   1. coCount: Map<item, count>
 *   2. For each basket that includes `target`:
 *        for item in basket where item !== target AND not in alreadyOwned:
 *          coCount.set(item, (coCount.get(item) ?? 0) + 1)
 *   3. Convert to entries; sort by (count desc, name asc); take first k.
 *
 *   Optionally: use a min-heap of size k for O(N log K).
 *
 * Why exclude alreadyOwned:
 *   Recommendations should bring NEW items into the cart, not redundantly
 *   suggest things the user already has. Standard for collaborative
 *   filtering UIs.
 *
 * Time:  O(B × avgBasketSize + U log U)
 * Space: O(U)
 *
 * Edge Cases:
 *   - target never co-occurs       → []
 *   - Every co-occurring item is owned → []
 *   - k > distinct co-occurring items → return all
 *   - Duplicate items in one basket → count once per basket
 */

/**
 * @param {string[][]} transactions
 * @param {string} target
 * @param {Set<string>} alreadyOwned
 * @param {number} k
 * @returns {Array<{item: string, count: number}>}
 */
const recommendItems = (transactions, target, alreadyOwned, k) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Co-Purchased — Part 2 (Recommendations) ===\n');

const trans = [
  ['milk', 'bread', 'butter'],
  ['milk', 'eggs', 'bread'],
  ['milk', 'bread'],
  ['bread', 'cheese', 'butter'],
];

console.log('Test 1:');
console.log(recommendItems(trans, 'bread', new Set(['milk']), 2));
// Expected: [{item:'butter',count:2},{item:'cheese',count:1}] (or similar)

console.log('\nTest 2 — exclude all candidates:');
console.log(recommendItems(trans, 'bread', new Set(['milk', 'butter', 'eggs', 'cheese']), 3));
// Expected: []

console.log('\nTest 3 — target absent:');
console.log(recommendItems(trans, 'soda', new Set(), 3));
// Expected: []
