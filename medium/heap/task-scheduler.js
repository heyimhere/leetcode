// TODO: implement
// LC #621 — Task Scheduler
//
// Given an array of `tasks` (uppercase letters) and a non-negative integer
// `n`, return the LEAST number of CPU intervals needed to complete all
// tasks, with the rule that the same task must be separated by at least
// `n` intervals. (Idle intervals are allowed.)
//
// Example:
//   tasks = ["A","A","A","B","B","B"], n = 2   → 8
//     Schedule: A B idle A B idle A B
//   tasks = ["A","C","A","B","D","B"],  n = 1   → 6
//   tasks = ["A","A","A"], n = 0   → 3
//
// Approach 1 (closed-form max-frequency formula — O(N + 26)):
//   1. Count frequencies; let M = max freq; T = count of tasks with freq = M.
//   2. Skeleton length = (M - 1) × (n + 1) + T.
//   3. Answer = max(skeleton, tasks.length).
//      The max handles the case where there are SO many distinct tasks that
//      the schedule packs without idles.
//
// Approach 2 (max-heap simulation):
//   Push counts into a max-heap. At each step, pop up to (n + 1) different
//   tasks, decrement and re-push the surviving ones. Count idles when the
//   heap doesn't have enough tasks.
//   O(N log 26) — generalizable to more complex variants.
//
// Why the formula works:
//   The MOST frequent task creates "slots" of length (n + 1). All but the
//   last block needs to be padded to length (n + 1). The trailing block
//   has size T (the number of tasks tied for max). If there are extras,
//   they fill in the idles.
//
// Time:  O(N)  for the formula; O(N log 26) for heap simulation
// Space: O(1)  (alphabet size 26)
//
// Edge Cases:
//   - n = 0                → answer = N (no cool-down)
//   - All distinct tasks   → answer = N (no repeats to space out)
//   - All same task        → answer = (M - 1) × (n + 1) + 1
//   - Empty tasks          → 0

/**
 * @param {string[]} tasks
 * @param {number} n
 * @returns {number}
 */
const leastInterval = (tasks, n) => {
  // your code here
};

console.log('=== LC #621 Task Scheduler ===\n');

console.log('Test 1:');
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2));
// Expected: 8

console.log('\nTest 2:');
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1));
// Expected: 6

console.log('\nTest 3 — n = 0:');
console.log(leastInterval(['A', 'A', 'A'], 0));
// Expected: 3

console.log('\nTest 4 — only one task type:');
console.log(leastInterval(['A', 'A', 'A'], 2));
// Expected: 7
