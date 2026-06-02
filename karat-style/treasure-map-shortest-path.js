// TODO: implement
// coding interview sample (Karat-style)

/**
 * Treasure Map — Shortest Path
 *
 * Problem Summary:
 *   You're given a 2D grid of cells. Each cell is either passable (true)
 *   or blocked (false). Starting at the top-left (0, 0), return the
 *   SHORTEST 4-directional path LENGTH to the bottom-right (m-1, n-1).
 *   If no path exists, return -1.
 *
 *   Part 2 (extension): return the actual path (list of coordinates).
 *
 *   Part 3 (extension): allow K wall-breaks — the path may pass through
 *   up to K blocked cells. (LC #1293)
 *
 *   Classic Karat / Roblox / Lyft onsite. Tests BFS on a grid plus careful
 *   bookkeeping for visited cells.
 *
 * Input:
 *   grid: boolean[][]   (true = passable, false = blocked)
 * Output:
 *   number  (number of EDGES = cells - 1; or -1)
 *
 * Example:
 *   grid =
 *     [[T,T,F,T],
 *      [F,T,T,T],
 *      [T,F,F,T],
 *      [T,T,T,T]]
 *   → 6   (one of: down-right zigzag covers 7 cells, 6 edges)
 *
 * Approach (BFS):
 *   1. If start or end is blocked, return -1.
 *   2. queue = [(0, 0, 0)]; mark start visited.
 *   3. Pop (r, c, d). If (r, c) === target, return d.
 *      For each 4-direction neighbor (nr, nc) that's in-bounds, passable,
 *      and unvisited: mark visited, push (nr, nc, d + 1).
 *   4. Queue drains without finding target → -1.
 *
 * Why BFS:
 *   Unit weights on edges → BFS gives the optimal shortest path.
 *
 * Why mark visited at ENQUEUE (not on pop):
 *   Avoids re-enqueueing the same cell many times (would still be correct
 *   but quadratic in the worst case).
 *
 * Time:  O(m × n)
 * Space: O(m × n)
 *
 * Edge Cases:
 *   - Start === end (1x1 grid)             → 0
 *   - Start or end blocked                 → -1
 *   - No connected path                    → -1
 *   - Grid entirely passable               → m + n - 2 edges (manhattan)
 */

/**
 * @param {boolean[][]} grid
 * @returns {number}
 */
const shortestTreasurePath = (grid) => {
  // your code here
};

/**
 * Part 2 — return the path itself.
 * @param {boolean[][]} grid
 * @returns {Array<[number, number]> | null}
 */
const treasurePath = (grid) => {
  // your code here
};

// ============ Test Cases ============

const T = true, F = false;

console.log('=== Treasure Map — Shortest Path ===\n');

console.log('Test 1:');
console.log(shortestTreasurePath([
  [T, T, F, T],
  [F, T, T, T],
  [T, F, F, T],
  [T, T, T, T],
]));
// Expected: 6

console.log('\nTest 2 — blocked end:');
console.log(shortestTreasurePath([[T, T], [T, F]]));
// Expected: -1

console.log('\nTest 3 — 1x1 grid:');
console.log(shortestTreasurePath([[T]]));
// Expected: 0

console.log('\nTest 4 — Part 2 path:');
console.log(treasurePath([
  [T, T, T],
  [F, T, T],
  [T, T, T],
]));
// Expected: a 4-edge path from (0,0) to (2,2)
