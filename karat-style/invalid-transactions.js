// TODO: implement
// coding interview sample (Karat-style)

/**
 * Invalid Transactions
 *
 * Problem Summary:
 *   You're given transactions as strings "name,time,amount,city". A
 *   transaction is INVALID if:
 *     1. its amount exceeds 1000, OR
 *     2. there exists ANOTHER transaction with the SAME NAME, a DIFFERENT
 *        CITY, and a time within 60 minutes (|t1 - t2| <= 60).
 *
 *   Return the list of invalid transactions (in any order). LC #1169.
 *
 *   Part 2 (extension): efficiency — Karat sometimes asks for an
 *   approach better than O(N²) per-name pair scan when each user has many
 *   transactions. Sort by time per user, sliding window. O(N log N).
 *
 * Input:
 *   transactions: string[]
 * Output:
 *   string[]
 *
 * Example:
 *   ["alice,20,800,mtv","alice,50,100,beijing"]
 *   → both invalid (same name; |20 - 50| = 30 <= 60; different city)
 *
 *   ["alice,20,800,mtv","alice,50,1200,mtv"]
 *   → alice,50,1200,mtv invalid (amount > 1000)
 *
 * Approach (group by name; check pairs):
 *   1. Parse each transaction. Group by name → list of (time, amount, city, raw).
 *   2. For each name's group:
 *        - Any amount > 1000 → mark its raw as invalid.
 *        - For each pair, if |t1 - t2| <= 60 AND city differs → mark BOTH invalid.
 *   3. Return all marked raws.
 *
 *   Use a Set to avoid duplicates when the same transaction is invalid for
 *   multiple reasons.
 *
 * Time:  O(N + sum(g²)) where g = group sizes (worst-case O(N²) if all one user)
 * Space: O(N)
 *
 * Edge Cases:
 *   - Identical transactions (same raw) → must include BOTH copies
 *   - Same city + same time             → not a basis for invalidity
 *   - Pair with |Δt| === 60             → invalid (inclusive)
 *   - Edge of amount === 1000           → valid (must EXCEED)
 */

/**
 * @param {string[]} transactions
 * @returns {string[]}
 */
const invalidTransactions = (transactions) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Invalid Transactions ===\n');

console.log('Test 1:');
console.log(invalidTransactions(['alice,20,800,mtv', 'alice,50,100,beijing']));
// Expected: both transactions (different cities, within 60 min)

console.log('\nTest 2:');
console.log(invalidTransactions(['alice,20,800,mtv', 'alice,50,1200,mtv']));
// Expected: ['alice,50,1200,mtv']

console.log('\nTest 3:');
console.log(invalidTransactions(['alice,20,800,mtv', 'bob,50,1200,mtv']));
// Expected: ['bob,50,1200,mtv']

console.log('\nTest 4 — duplicate raw, both invalid:');
console.log(invalidTransactions(['alice,20,800,mtv', 'alice,20,800,mtv', 'alice,40,800,nyc']));
// Expected: all three (two paired vs nyc transaction)
