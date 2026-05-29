// TODO: implement
// LC #547 — Number of Provinces
//
// There are n cities. Some are directly connected, some aren't.
// If city A is directly connected to city B, and B is directly connected to C,
// then A and C are indirectly connected. A "province" is a group of cities
// that are all (directly or indirectly) connected.
//
// You're given an n x n matrix `isConnected` where:
//   isConnected[i][j] = 1  → city i and city j are directly connected
//   isConnected[i][j] = 0  → not connected
// Return the total number of provinces.
//
// Example:
//   isConnected = [[1,1,0],
//                  [1,1,0],
//                  [0,0,1]]
//   → 2 provinces ({0,1} and {2})
//
//   isConnected = [[1,0,0],
//                  [0,1,0],
//                  [0,0,1]]
//   → 3 provinces (each city alone)
//
// Approach (DFS / connected components):
//   The matrix is an adjacency matrix for an undirected graph.
//   Count provinces = count connected components.
//
//   - Keep a `visited` array of length n.
//   - For each city i not yet visited:
//       - Start a DFS (or BFS) from i, marking everything reachable as visited.
//       - Increment the province count by 1.
//   - The number of times you START a fresh DFS = number of provinces.
//
// Why this works:
//   Each DFS from an unvisited city paints exactly one connected component.
//   Cities already visited are part of a previously counted province, so we skip them.
//
// Alternative: Union-Find (Disjoint Set Union).
//   - Initialize each city as its own parent.
//   - For each pair (i, j) where isConnected[i][j] = 1, union them.
//   - Count distinct roots at the end.
//   - Slightly fancier but same big-O.
//
// Time:  O(n²)  — we may scan every cell of the matrix in the worst case
// Space: O(n)   — visited array + recursion stack
//
// Edge Cases:
//   - n = 1                    → 1 province
//   - All cities connected     → 1 province
//   - No connections (only the diagonal) → n provinces
//   - Self-connection diagonal (always 1) — don't double-count

/**
 * @param {number[][]} isConnected
 * @returns {number}
 */
const findCircleNum = (isConnected) => {
  // your code here
};

console.log('=== LC #547 Number of Provinces ===\n');

console.log('Test 1 — Two provinces:');
console.log(findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]));
// Expected: 2

console.log('\nTest 2 — Three isolated cities:');
console.log(findCircleNum([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]));
// Expected: 3

console.log('\nTest 3 — All connected (one big province):');
console.log(findCircleNum([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]));
// Expected: 1

console.log('\nTest 4 — Indirect connection (transitive):');
console.log(findCircleNum([
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
]));
// Expected: 2  ({0,1,2} via transitivity, and {3} alone)

console.log('\nTest 5 — Single city:');
console.log(findCircleNum([[1]]));
// Expected: 1
