// TODO: implement
// coding interview sample (Karat-style)

/**
 * Domain Visit Counter — Part 2 — Top K Domains Per Hour
 *
 * Extends `domain-visit-counter.js`. Part 1 aggregated subdomain visit
 * counts. Part 2 adds a TIME dimension: given logs with timestamps, return
 * a map from each HOUR (Unix-epoch hour) to its TOP K domains by visit
 * count in that hour.
 *
 * Input:
 *   logs: Array<{ time: number, domain: string, visits: number }>
 *         time = unix epoch seconds; visits = how many hits this log line
 *         represents.
 *   k: number
 * Output:
 *   Map<hour, Array<{ domain: string, count: number }>>
 *     hour = Math.floor(time / 3600).
 *     Each entry sorted by count desc, domain asc, capped at k.
 *
 * Example:
 *   logs = [
 *     { time: 3600,  domain: "a.com", visits: 5 },
 *     { time: 3700,  domain: "b.com", visits: 2 },
 *     { time: 3800,  domain: "a.com", visits: 1 },
 *     { time: 7300,  domain: "b.com", visits: 4 },
 *   ]
 *   k = 1
 *   → Map {
 *       1 => [{ domain: "a.com", count: 6 }],
 *       2 => [{ domain: "b.com", count: 4 }]
 *     }
 *
 * Approach:
 *   1. perHour: Map<hour, Map<domain, count>>
 *   2. For each log: hour = floor(time / 3600); accumulate visits.
 *   3. For each hour, convert its inner Map to entries, sort (count desc,
 *      domain asc), slice 0..k, attach to the result.
 *
 *   Use a min-heap of size k inside each hour for very large datasets.
 *
 * Why bucket by floor(t/3600):
 *   Standard "wall-clock hour" bucket. Easy to convert to ISO strings if
 *   the spec wants human-readable hour labels.
 *
 * Time:  O(N + H × U log U)   N logs, H hours, U distinct domains per hour
 * Space: O(N) buckets
 *
 * Edge Cases:
 *   - k > distinct domains in an hour     → return all in that hour
 *   - Hour with no entries                 → omit from the map
 *   - Subdomains: do you also tally parents? → Part 1 covers that; here
 *                                              treat domains opaquely
 *   - Negative or zero `visits`            → spec usually disallows; guard
 */

/**
 * @param {Array<{time: number, domain: string, visits: number}>} logs
 * @param {number} k
 * @returns {Map<number, Array<{domain: string, count: number}>>}
 */
const topDomainsPerHour = (logs, k) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Domain Visit Counter — Part 2 (Top K per Hour) ===\n');

const logs = [
  { time: 3600, domain: 'a.com', visits: 5 },
  { time: 3700, domain: 'b.com', visits: 2 },
  { time: 3800, domain: 'a.com', visits: 1 },
  { time: 7300, domain: 'b.com', visits: 4 },
];

console.log('Test 1 — k=1:');
console.log(topDomainsPerHour(logs, 1));
// Expected: Map { 1 => [{domain:'a.com',count:6}], 2 => [{domain:'b.com',count:4}] }

console.log('\nTest 2 — k=2:');
console.log(topDomainsPerHour(logs, 2));
// Expected: Map { 1 => [a.com:6, b.com:2], 2 => [b.com:4] }

console.log('\nTest 3 — empty logs:');
console.log(topDomainsPerHour([], 5));
// Expected: empty Map
