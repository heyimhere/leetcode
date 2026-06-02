// TODO: implement
// LC #286 — Walls and Gates
//
// You're given an m × n grid with these values:
//   -1   = wall / obstacle
//    0   = gate
//    INF = empty room (use 2147483647 in tests)
// Fill EACH empty room with the distance to its NEAREST gate (in 4-direction
// steps). If unreachable, leave it as INF.
//
// Example:
//   Input:
//   [[INF,-1,  0, INF],
//    [INF,INF,INF, -1],
//    [INF, -1,INF, -1],
//    [  0, -1,INF,INF]]
//
//   Output:
//   [[3, -1, 0, 1],
//    [2,  2, 1,-1],
//    [1, -1, 2,-1],
//    [0, -1, 3, 4]]
//
// Approach (multi-source BFS from ALL gates at once):
//   1. Push every gate cell into the queue with distance 0.
//   2. BFS. For each pop, try each 4-neighbor. If it's INF and within
//      bounds, set neighbor = current + 1 and enqueue.
//   3. INF stays put for unreachable cells (e.g., walled off).
//
// Why multi-source:
//   Each empty room needs its NEAREST gate. By starting BFS from all gates
//   simultaneously, the first time any cell gets discovered IS by its
//   nearest gate.
//
// Why mutating the grid is the visited set:
//   Once a cell has a finite value (≠ INF), it's been visited. No need
//   for a separate visited matrix.
//
// Time:  O(m × n)
// Space: O(m × n) queue in the worst case
//
// Edge Cases:
//   - No gates              → grid unchanged (all INF stay INF)
//   - No empty rooms        → grid unchanged
//   - Walled-off pockets    → those stay INF
//   - Multiple gates near same room → BFS naturally picks the closest

const INF = 2147483647;

/**
 * @param {number[][]} rooms
 * @returns {void}  (mutates in place)
 */
const wallsAndGates = (rooms) => {
  // your code here
};

console.log('=== LC #286 Walls and Gates ===\n');

const r = [
  [INF, -1,  0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];
wallsAndGates(r);
console.log('Test 1:', r);
// Expected:
// [[ 3,-1, 0, 1],
//  [ 2, 2, 1,-1],
//  [ 1,-1, 2,-1],
//  [ 0,-1, 3, 4]]
