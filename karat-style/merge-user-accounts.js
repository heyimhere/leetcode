// TODO: implement
// coding interview sample (Karat-style)

/**
 * Merge User Accounts
 *
 * Problem Summary:
 *   Each user record is [name, email1, email2, ...]. Two records belong
 *   to the SAME user iff they share at least one email. Return the merged
 *   list of accounts: each merged record contains the name followed by ALL
 *   that user's distinct emails sorted ascending. Names alone don't
 *   identify users.
 *
 *   Equivalent to LC #721 — Accounts Merge.
 *
 *   Part 2 (often the live extension): support QUERIES — "what's the
 *   canonical user for email X?" after a stream of merges. Use Union-Find
 *   with `find` returning the root rep + a Map<email, name> lookup.
 *
 * Input / Output:
 *   accounts: Array of arrays of strings
 *   Returns: Array of merged accounts in any order; each emails-sorted.
 *
 * Example:
 *   [
 *     ["John","johnsmith@mail.com","john00@mail.com"],
 *     ["John","johnnybravo@mail.com"],
 *     ["John","johnsmith@mail.com","john_newyork@mail.com"],
 *     ["Mary","mary@mail.com"]
 *   ]
 *   → [
 *       ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
 *       ["John","johnnybravo@mail.com"],
 *       ["Mary","mary@mail.com"]
 *     ]
 *
 * Approach (Union-Find on emails):
 *   1. Treat each unique email as a node.
 *   2. For each account: union all of its emails into one group.
 *   3. Build Map<email, name> as you go (same name for any email of one user).
 *   4. Walk every email, find its root, group into Map<root, Set<email>>.
 *   5. Emit [name, ...sortedEmails] per group.
 *
 * Why Union-Find:
 *   The "share an email → same user" relation is reflexive, symmetric,
 *   transitive — classic equivalence-class problem. Path compression +
 *   union-by-rank give near-O(1) per op.
 *
 * Alternatives:
 *   - DFS on an email→emails graph: build adjacency between every pair of
 *     emails that co-occur in an account; connected components are users.
 *
 * Time:  O(E α(E))    E = total emails
 * Space: O(E)
 *
 * Edge Cases:
 *   - Single-email accounts            → stand alone
 *   - Identical accounts (same emails) → merged into one
 *   - Same name, different users       → DON'T merge (only emails count)
 */

/**
 * @param {string[][]} accounts
 * @returns {string[][]}
 */
const accountsMerge = (accounts) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Merge User Accounts ===\n');

console.log('Test 1:');
console.log(accountsMerge([
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['Mary', 'mary@mail.com'],
]));
// Expected: 3 merged accounts; johnsmith chain merges john00 and john_newyork.

console.log('\nTest 2 — same name, no shared email:');
console.log(accountsMerge([
  ['John', 'a@x.com'],
  ['John', 'b@x.com'],
]));
// Expected: 2 separate accounts

console.log('\nTest 3 — empty input:');
console.log(accountsMerge([]));
// Expected: []
