// TODO: implement
// LC #853 — Car Fleet
//
// `target` is the distance to a destination. `position[i]` and `speed[i]`
// are the starting position and speed of car i. A faster car catches up
// to a slower one in front and forms a "fleet" (moves at the slower car's
// speed). A car arriving AT the destination at the SAME TIME as another
// is also a fleet. Return the number of distinct fleets at the destination.
//
// Example:
//   target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]   → 3
//     Times to target: [1, 1, 12, 7, 3]
//     Sorted by position desc: pos=10 t=1; pos=8 t=1; pos=5 t=7;
//                              pos=3 t=3; pos=0 t=12
//     Stack approach yields 3 fleets.
//
// Approach (sort by position descending, stack of arrival times):
//   1. Pair (position, speed) and SORT descending by position.
//   2. Compute arrival time for each: t = (target - position) / speed.
//   3. Walk left → right (highest position first). Use a stack-like
//      counter:
//        if current arrival time > stack top → forms a NEW fleet; push.
//        else → it catches the fleet ahead; absorbed.
//   4. Return stack.length.
//
// Why "current.time > prev.time" means new fleet:
//   Cars are processed in order of position (closest to target first). If
//   the current (further back) car arrives LATER than the one ahead, it
//   never catches up — distinct fleet. If sooner-or-equal, it merges.
//
// Time:  O(n log n) for sort
// Space: O(n)
//
// Edge Cases:
//   - 0 cars         → 0
//   - 1 car          → 1
//   - All same speed → same fleet count as input (no catching up)
//   - Same position  → spec usually disallows; if allowed, ties merge

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @returns {number}
 */
const carFleet = (target, position, speed) => {
  // your code here
};

console.log('=== LC #853 Car Fleet ===\n');

console.log('Test 1:');
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// Expected: 3

console.log('\nTest 2 — single car:');
console.log(carFleet(10, [3], [3]));
// Expected: 1

console.log('\nTest 3 — all catch up:');
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
// Expected: 1

console.log('\nTest 4 — no cars:');
console.log(carFleet(10, [], []));
// Expected: 0
