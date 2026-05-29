// TODO: implement
// coding interview sample (Karat-style)

/**
 * Subdomain Visit Counter
 *
 * Problem Summary:
 * You're given a list of "count-paired domains" — strings like
 *   "9001 discuss.leetcode.com"
 *   "50  mail.google.com"
 *   "1   intel.mail.google.com"
 *
 * Each is a count followed by a space and a domain.
 *
 * The visit count for a domain ALSO counts toward every parent domain.
 * For example, a visit to "discuss.leetcode.com" is also a visit to
 * "leetcode.com" and "com".
 *
 * Build:
 *   1. subdomainVisits(cpdomains)
 *      → return an array of "<count> <domain>" strings covering every
 *        subdomain that received at least one visit.
 *      (LeetCode #811)
 *
 *   2. topKDomains(cpdomains, k)
 *      → return the top-k visited subdomains, sorted by visit count desc.
 *
 * Example:
 *   cpdomains = ["9001 discuss.leetcode.com"]
 *
 *   subdomainVisits → [
 *     "9001 discuss.leetcode.com",
 *     "9001 leetcode.com",
 *     "9001 com",
 *   ]
 *
 *   cpdomains = [
 *     "900 google.mail.com",
 *     "50 yahoo.com",
 *     "1 intel.mail.com",
 *     "5 wiki.org",
 *   ]
 *
 *   subdomainVisits → counts roll up:
 *     "900 google.mail.com"  "901 mail.com"  "951 com"  ...
 *
 * Approach:
 *   For each "count domain" entry:
 *     - Parse count (integer) and domain string.
 *     - Split domain by '.'. For each suffix slice ("a.b.c", "b.c", "c"),
 *       add count to a Map<domain, totalVisits>.
 *   Then format the map back to "<count> <domain>" strings.
 *
 *   For topK: convert map entries to an array, sort by count desc, slice k.
 *   (Or use a min-heap of size k for O(n log k).)
 *
 * Why split + suffix iteration:
 *   - Every visit to "a.b.c" counts for "a.b.c", "b.c", "c". So we need
 *     to add to all suffix domains.
 *   - Joining parts[i..] with '.' is the standard pattern.
 *
 * Time:
 *   - O(total characters across all input)
 *   - topK: O(D log D) sort, or O(D log k) heap, where D = unique subdomains
 * Space:
 *   - O(D) for the map
 *
 * Edge Cases:
 *   - Single-segment domain "5 com"        → just one entry
 *   - Repeated domains across input        → sum the counts
 *   - Same suffix shared by many domains   → counts pile up at the parent
 *   - k > number of subdomains             → return all of them
 */

/**
 * @param {string[]} cpdomains
 * @returns {string[]}
 */
const subdomainVisits = (cpdomains) => {
  // your code here
};

/**
 * @param {string[]} cpdomains
 * @param {number} k
 * @returns {string[]}
 */
const topKDomains = (cpdomains, k) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Subdomain Visit Counter ===\n');

console.log('Test 1 — Single deep domain:');
console.log(subdomainVisits(['9001 discuss.leetcode.com']));
// Expected (order may vary):
// [ '9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com' ]

console.log('\nTest 2 — Classic LC #811 example:');
console.log(subdomainVisits([
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 wiki.org',
]));
// Expected (order may vary): counts for
//   google.mail.com  → 900
//   mail.com         → 901  (900 + 1)
//   com              → 951  (900 + 50 + 1)
//   yahoo.com        → 50
//   intel.mail.com   → 1
//   wiki.org         → 5
//   org              → 5

console.log('\nTest 3 — Single segment domain:');
console.log(subdomainVisits(['5 com']));
// Expected: [ '5 com' ]

console.log('\nTest 4 — topKDomains (k=3):');
console.log(topKDomains([
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 wiki.org',
], 3));
// Expected: the three highest, e.g.
// [ '951 com', '901 mail.com', '900 google.mail.com' ]

console.log('\nTest 5 — k larger than unique subdomain count:');
console.log(topKDomains(['5 com'], 10));
// Expected: [ '5 com' ]
