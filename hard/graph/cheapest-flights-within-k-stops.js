// TODO: implement
// LC #787 — Cheapest Flights Within K Stops
//
// n cities labeled 0..n-1; `flights[i] = [from, to, price]`. Return the
// cheapest price from `src` to `dst` using AT MOST `k` STOPS (i.e. at most
// k + 1 edges). -1 if impossible.
//
// Example:
//   n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
//   src = 0, dst = 3, k = 1   → 700  (0→1→3)
//   src = 0, dst = 3, k = 0   → -1
//
// Approach 1 (Bellman-Ford limited to k + 1 relaxations):
//   dist = Array(n).fill(Infinity); dist[src] = 0
//   for i in 0..k:
//     nextDist = dist.slice()    // important: relax from PREV state only
//     for [u, v, w] in flights:
//       if dist[u] + w < nextDist[v]:
//         nextDist[v] = dist[u] + w
//     dist = nextDist
//   return dist[dst] === Infinity ? -1 : dist[dst]
//
// Why "k + 1 relaxations":
//   With each pass we extend paths by one MORE edge. After k+1 passes
//   we've considered all paths of length ≤ k+1 edges = ≤ k stops.
//
// Why we must NOT relax in place:
//   Standard Bellman-Ford allows propagation within a single pass. Here
//   we explicitly want to limit hop count — so each pass uses dist from
//   the PREVIOUS pass.
//
// Approach 2 (Dijkstra-like with (cost, node, stops) state):
//   Min-heap of (cost, node, stops). When you pop (c, n, s), if n === dst
//   return c. Else if s < k + 1, push neighbors.
//   May visit nodes multiple times — must NOT use a "visited" set as you
//   would in plain Dijkstra; instead track best cost for (node, stops).
//
// Time:  O((k + 1) × E)
// Space: O(n)
//
// Edge Cases:
//   - src === dst             → 0
//   - k = 0 and direct flight → that price
//   - dst unreachable         → -1
//   - Multiple paths same cost → return that cost

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @returns {number}
 */
const findCheapestPrice = (n, flights, src, dst, k) => {
  // your code here
};

console.log('=== LC #787 Cheapest Flights Within K Stops ===\n');

console.log('Test 1:');
console.log(findCheapestPrice(4,
  [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]],
  0, 3, 1));
// Expected: 700

console.log('\nTest 2:');
console.log(findCheapestPrice(4,
  [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]],
  0, 3, 0));
// Expected: -1

console.log('\nTest 3 — src === dst:');
console.log(findCheapestPrice(3, [[0, 1, 5]], 1, 1, 0));
// Expected: 0
