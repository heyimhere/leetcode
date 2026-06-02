// TODO: implement
// LC #1441 — Build an Array With Stack Operations
//
// You're given an integer array `target` (strictly increasing, values in
// [1, n]) and an integer n. You read the natural numbers 1..n one by one
// from an input stream. For each number, you can:
//   - PUSH it onto a stack, then optionally POP it immediately.
// Return the SHORTEST sequence of "Push"/"Pop" operations that yields
// `target` as the final stack contents (from bottom to top).
//
// Example:
//   target = [1,3], n = 3
//   stream:    1  2  3
//   ops:    Push Push Pop Push  → stack = [1, 3]
//   answer = ["Push","Push","Pop","Push"]
//
// Approach (greedy walk):
//   1. j = 0 (pointer into target)
//   2. For i from 1 to n:
//        if j === target.length → break (we have everything)
//        Push i.
//        If i !== target[j]   → Pop (drop the unwanted number)
//        else                 → j++   (we kept it)
//
// Why we stop at the last needed value:
//   Once j === target.length, every remaining number is unneeded — and the
//   problem wants the SHORTEST sequence, so we don't continue pushing &
//   popping the rest.
//
// Time:  O(target[last])  — we walk up to the highest target value
// Space: O(answer length) for the output array
//
// Edge Cases:
//   - target = [n]                 → many Push/Pop pairs then one final Push
//   - target = [1,2,...,n]         → all Pushes, no Pops
//   - n much larger than target.last → still stop at the last target value

/**
 * @param {number[]} target
 * @param {number} n
 * @returns {string[]}
 */
const buildArray = (target, n) => {
  // your code here
};

console.log('=== LC #1441 Build an Array With Stack Operations ===\n');

console.log('Test 1:');
console.log(buildArray([1, 3], 3));
// Expected: ["Push","Push","Pop","Push"]

console.log('\nTest 2:');
console.log(buildArray([1, 2, 3], 3));
// Expected: ["Push","Push","Push"]

console.log('\nTest 3 — gaps:');
console.log(buildArray([1, 2], 4));
// Expected: ["Push","Push"]

console.log('\nTest 4 — last value only:');
console.log(buildArray([2, 3, 4], 4));
// Expected: ["Push","Pop","Push","Push","Push"]
