// LC #621 — Task Scheduler   [Medium]   Pattern: Heap / Greedy
//
// You are given an array of CPU tasks, each labeled with an uppercase letter,
// and an integer n — the cooldown period. Two IDENTICAL tasks must be
// separated by at least n intervals.
//
// Each interval the CPU either runs one task or sits idle. Tasks may be run
// in any order. Return the MINIMUM number of intervals needed to finish
// every task.
//
// Example 1:
//   Input:  tasks = ["A","A","A","B","B","B"], n = 2
//   Output: 8        (A B idle A B idle A B)
// Example 2:
//   Input:  tasks = ["A","C","A","B","D","B"], n = 1
//   Output: 6        (no idling needed)
// Example 3:
//   Input:  tasks = ["A","A","A","B","B","B"], n = 0
//   Output: 6
//
// Constraints:
//   1 <= tasks.length <= 10^4
//   tasks[i] is an uppercase English letter.
//   0 <= n <= 100

const leastInterval = (tasks, n) => {

};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)); // expected: 8
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1)); // expected: 6
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)); // expected: 6
