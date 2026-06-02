// TODO: implement
// LC #417 — Pacific Atlantic Water Flow
//
// You're given an m × n integer grid `heights` representing the altitude
// of cells. The Pacific Ocean borders the LEFT and TOP edges; the Atlantic
// borders the RIGHT and BOTTOM edges. Water flows from a cell to any
// 4-neighboring cell with height ≤ the current. Return all cells from
// which water can reach BOTH oceans.
//
// Example:
//   heights = [
//     [1,2,2,3,5],
//     [3,2,3,4,4],
//     [2,4,5,3,1],
//     [6,7,1,4,5],
//     [5,1,1,2,4]
//   ]
//   → [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]  (any order)
//
// Approach (reverse BFS/DFS from each ocean, intersect):
//   For each ocean, find all cells from which the ocean is reachable by
//   going DOWNHILL (in the original "flow" sense). Equivalently: starting
//   from each ocean's border cells, do BFS/DFS following the REVERSED rule
//   (move to cells with height ≥ current). Mark visited.
//
//   Then the answer is the intersection of the two visited sets.
//
// Why reverse direction:
//   Direct simulation ("from each cell, can I reach either ocean?") is
//   O(mn × mn) worst case. Reverse-from-ocean lets you mark all reachable
//   cells in O(mn) per ocean, then take the intersection.
//
// Time:  O(m × n)
// Space: O(m × n) for two visited grids
//
// Edge Cases:
//   - 1-cell grid            → that cell touches both oceans
//   - All same height        → every cell reaches both
//   - Strictly increasing in one direction → only certain edges qualify
//   - Empty grid             → []

/**
 * @param {number[][]} heights
 * @returns {number[][]}
 */
const pacificAtlantic = (heights) => {
  // your code here
};

console.log('=== LC #417 Pacific Atlantic Water Flow ===\n');

console.log('Test 1:');
console.log(pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
]));
// Expected (any order): [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

console.log('\nTest 2 — single cell:');
console.log(pacificAtlantic([[1]]));
// Expected: [[0,0]]
