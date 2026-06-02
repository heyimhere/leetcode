// TODO: implement
// LC #509 — Fibonacci Number  (recursive variants)
//
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n ≥ 2.
//
// Example:
//   n = 2  → 1
//   n = 4  → 3
//   n = 10 → 55
//
// This file is the RECURSION-focused practice variant. Implement all three
// to feel the trade-offs:
//
// Approach A — naive recursion (exponential, for the educational pain):
//   fib(n) = (n <= 1) ? n : fib(n-1) + fib(n-2)
//   Time:  O(φ^n)
//   Space: O(n) call stack
//   Useful only to *show* why memoization matters.
//
// Approach B — memoized recursion (top-down DP):
//   memo = new Map()
//   fib(n):
//     if n <= 1 → n
//     if memo has n → memo.get(n)
//     v = fib(n-1) + fib(n-2)
//     memo.set(n, v); return v
//   Time:  O(n)
//   Space: O(n)
//
// Approach C — iterative rolling pair (classic):
//   if n <= 1 → n
//   a = 0; b = 1
//   for i in 2..n: [a, b] = [b, a + b]
//   return b
//   Time:  O(n)
//   Space: O(1)
//
// Time/Space: see per-approach above.
//
// Edge Cases:
//   - n = 0 → 0
//   - n = 1 → 1
//   - large n (naive blows up; use memo or iterative)

/**
 * @param {number} n
 * @returns {number}
 */
const fib = (n) => {
  // your code here (any of the three approaches; try them all)
};

console.log('=== LC #509 Fibonacci (recursive practice) ===\n');

console.log('Test 1 — n=2:');
console.log(fib(2));
// Expected: 1

console.log('\nTest 2 — n=4:');
console.log(fib(4));
// Expected: 3

console.log('\nTest 3 — n=10:');
console.log(fib(10));
// Expected: 55

console.log('\nTest 4 — n=30:');
console.log(fib(30));
// Expected: 832040  (naive recursion is noticeably slow here; memo/iterative is instant)
