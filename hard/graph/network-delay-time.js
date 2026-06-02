// TODO: implement
// LC #743 — Network Delay Time
//
// You're given `times[i] = [u, v, w]` — a directed edge from u to v with
// travel time w. n nodes labeled 1..n. A signal is sent from node `k`.
// Return the MINIMUM time for ALL nodes to receive it, or -1 if some node
// is unreachable.
//
// Example:
//   times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2  → 2
//   times = [[1,2,1]], n = 2, k = 1                  → 1
//   times = [[1,2,1]], n = 2, k = 2                  → -1
//
// Approach (Dijkstra's algorithm with a min-heap):
//   1. Build adjacency list: graph[u] = list of (v, w).
//   2. dist = Array(n + 1).fill(Infinity); dist[k] = 0
//   3. heap = [(0, k)]   (distance, node)
//   4. While heap not empty:
//        (d, u) = heap.pop()
//        if d > dist[u] → continue       // stale entry
//        for (v, w) in graph[u]:
//          nd = d + w
//          if nd < dist[v]:
//            dist[v] = nd; heap.push((nd, v))
//   5. ans = max(dist[1..n]). If ans === Infinity → -1; else ans.
//
// Why Dijkstra works:
//   All edge weights are non-negative. Dijkstra correctly computes single-
//   source shortest paths in O((V + E) log V). The MAX of those distances
//   is when the last node receives the signal.
//
// Bellman-Ford alternative:
//   O(VE). Use if negative edges existed (they don't here).
//
// Time:  O((V + E) log V)
// Space: O(V + E)
//
// Edge Cases:
//   - Some node unreachable    → -1
//   - n = 1                    → 0
//   - Self-loops               → ignored (don't help any node receive)
//   - Multiple edges same pair → keep the cheaper one (or rely on dist check)

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
const networkDelayTime = (times, n, k) => {
  // your code here
};

console.log('=== LC #743 Network Delay Time ===\n');

console.log('Test 1:');
console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
// Expected: 2

console.log('\nTest 2:');
console.log(networkDelayTime([[1, 2, 1]], 2, 1));
// Expected: 1

console.log('\nTest 3 — unreachable:');
console.log(networkDelayTime([[1, 2, 1]], 2, 2));
// Expected: -1
