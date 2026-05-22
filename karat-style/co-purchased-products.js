// coding interview sample (Karat-style)

/**
 * Most Co-Purchased Product Pair
 *
 * Problem Summary:
 * An e-commerce site wants to know which two products are most often
 * purchased together. Given a list of order line items as [orderId, productId],
 * return the pair of products that appears together in the most orders.
 *
 * Common interview prompt at Amazon, Shopify, and Karat clients.
 *
 * Input: Array of [orderId, productId] pairs.
 *        An order may contain many products. A product may appear in many orders.
 * Output: A pair [productA, productB] (sorted, to keep a canonical form),
 *         along with the count of co-occurrences.
 *
 * Example:
 *   Input: [
 *     ["o1", "milk"],
 *     ["o1", "bread"],
 *     ["o1", "eggs"],
 *     ["o2", "milk"],
 *     ["o2", "bread"],
 *     ["o3", "bread"],
 *     ["o3", "eggs"],
 *   ]
 *   Output: { pair: ["bread", "milk"], count: 2 }
 *     - milk+bread co-occur in o1 AND o2 → 2
 *     - milk+eggs  co-occur in o1        → 1
 *     - bread+eggs co-occur in o1 AND o3 → 2  (tie — return either)
 *
 * Approach (Inverted Index → Pair Counting):
 *   Step 1: Build orderId → Set<productId>.
 *   Step 2: For each order, generate all unordered pairs of its products.
 *           For each pair, sort the two product IDs (canonical key) and
 *           increment a Map<"prodA|prodB", number>.
 *   Step 3: Walk the pair-count map and track the max.
 *
 * Why canonical (sorted) keys:
 *   ["milk","bread"] and ["bread","milk"] are the same pair — sorting
 *   guarantees one bucket per logical pair regardless of order in the order.
 *
 * Time:
 *   - Build order map: O(E)         where E = number of line items
 *   - Pair generation: O(sum of K_i² ) where K_i = items in order i
 *   - Find max:        O(P)         where P = unique pairs
 *   Total worst case: O(E + sum(K_i²))
 * Space: O(E + P)
 *
 * Edge Cases:
 *   - Order with only 1 product → no pairs to generate
 *   - Empty input               → return null / { pair: null, count: 0 }
 *   - Ties                      → return any one of the tied pairs (document this)
 *   - Same product listed twice in an order → Set dedups
 */

/**
 * Finds the product pair that appears in the most orders together.
 * @param {string[][]} lineItems - Array of [orderId, productId] pairs
 * @returns {{ pair: [string, string] | null, count: number }}
 */
const mostCoPurchasedPair = (lineItems) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Most Co-Purchased Pair ===\n');

console.log('Test 1 — Basic grocery orders:');
console.log(mostCoPurchasedPair([
  ['o1', 'milk'],
  ['o1', 'bread'],
  ['o1', 'eggs'],
  ['o2', 'milk'],
  ['o2', 'bread'],
  ['o3', 'bread'],
  ['o3', 'eggs'],
]));
// Expected: { pair: ['bread', 'milk'] OR ['bread', 'eggs'], count: 2 }

console.log('\nTest 2 — Clear single winner:');
console.log(mostCoPurchasedPair([
  ['a', 'x'], ['a', 'y'],
  ['b', 'x'], ['b', 'y'],
  ['c', 'x'], ['c', 'y'],
  ['d', 'z'], ['d', 'y'],
]));
// Expected: { pair: ['x', 'y'], count: 3 }

console.log('\nTest 3 — Single-item orders only (no pairs):');
console.log(mostCoPurchasedPair([
  ['o1', 'milk'],
  ['o2', 'bread'],
  ['o3', 'eggs'],
]));
// Expected: { pair: null, count: 0 }

console.log('\nTest 4 — Empty input:');
console.log(mostCoPurchasedPair([]));
// Expected: { pair: null, count: 0 }

console.log('\nTest 5 — Duplicate product in one order:');
console.log(mostCoPurchasedPair([
  ['o1', 'milk'],
  ['o1', 'milk'],   // duplicate — should be deduped
  ['o1', 'bread'],
  ['o2', 'milk'],
  ['o2', 'bread'],
]));
// Expected: { pair: ['bread', 'milk'], count: 2 }
