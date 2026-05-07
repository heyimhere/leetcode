// coding interview sample

/**
 * Fibonacci Number - LeetCode #509
 * 
 * Problem Summary:
 * The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones.
 * F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n > 1.
 * Given n, calculate F(n).
 * 
 * Possible Approaches:
 * 1. Naive Recursion: Directly implement the mathematical definition.
 *    - Time: O(2^n), Space: O(n) call stack. Terrible - lots of repeated calculations.
 * 2. Recursion with Memoization (Top-Down DP): Cache results to avoid recomputation.
 *    - Time: O(n), Space: O(n) for cache + call stack. Much better.
 * 3. Bottom-Up DP (Tabulation): Build solution iteratively from base cases.
 *    - Time: O(n), Space: O(n) for the DP array. Good, no recursion overhead.
 * 4. Space-Optimized Iterative: Only track the last two values.
 *    - Time: O(n), Space: O(1). Best practical solution.
 * 5. Matrix Exponentiation: Use matrix power for F(n).
 *    - Time: O(log n), Space: O(1). Overkill for interviews, but mathematically elegant.
 * 
 * Chosen Approach: Space-Optimized Iterative
 * - Most efficient space complexity O(1).
 * - Simple to understand and implement.
 * - No recursion overhead or stack overflow risk.
 * - Perfect for interviews - shows understanding of DP optimization.
 * 
 * Algorithm Steps:
 * 1. Handle base cases: If n is 0, return 0. If n is 1, return 1.
 * 2. Initialize two variables: prev2 = 0 (F(0)), prev1 = 1 (F(1)).
 * 3. Iterate from 2 to n:
 *    a. Calculate current = prev1 + prev2 (sum of two previous).
 *    b. Shift values: prev2 becomes prev1, prev1 becomes current.
 * 4. Return prev1 (which now holds F(n)).
 * 
 * Why This Works:
 * - To calculate F(n), we only need F(n-1) and F(n-2).
 * - We don't need to store the entire sequence, just the last two values.
 * - By iterating forward, we build up to F(n) step by step.
 * - This is the essence of dynamic programming: optimal substructure + overlapping subproblems.
 * 
 * Time Complexity: O(n) - Single loop from 2 to n.
 * Space Complexity: O(1) - Only two variables regardless of input size.
 * 
 * Key Patterns: Dynamic Programming, Space Optimization
 * 
 * Edge Cases:
 * - n = 0: Returns 0 (base case).
 * - n = 1: Returns 1 (base case).
 * - n = 2: Returns 1 (0 + 1).
 * - Large n: Works efficiently without stack overflow.
 */

/**
 * Calculates the nth Fibonacci number using space-optimized iteration.
 * @param {number} n - The index in the Fibonacci sequence (0-indexed)
 * @returns {number} - The nth Fibonacci number
 */
function fib(n) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Track only the last two Fibonacci numbers
  let prev2 = 0; // F(0)
  let prev1 = 1; // F(1)
  
  // Build up from F(2) to F(n)
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}

/**
 * Alternative: Recursion with Memoization (Top-Down DP)
 * Useful to understand the recursive structure of the problem.
 * @param {number} n - The index in the Fibonacci sequence
 * @param {Object} memo - Cache for computed values
 * @returns {number} - The nth Fibonacci number
 */
function fibMemo(n, memo = {}) {
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Return cached result if available
  if (memo[n] !== undefined) return memo[n];
  
  // Compute and cache the result
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// ============ Test Cases ============

// Test Case 1: F(0) = 0
console.log('Test 1 - fib(0):', fib(0)); // Expected: 0

// Test Case 2: F(1) = 1
console.log('Test 2 - fib(1):', fib(1)); // Expected: 1

// Test Case 3: F(2) = 1
console.log('Test 3 - fib(2):', fib(2)); // Expected: 1

// Test Case 4: F(4) = 3 (0, 1, 1, 2, 3)
console.log('Test 4 - fib(4):', fib(4)); // Expected: 3

// Test Case 5: F(10) = 55
console.log('Test 5 - fib(10):', fib(10)); // Expected: 55

// Test Case 6: F(20) = 6765
console.log('Test 6 - fib(20):', fib(20)); // Expected: 6765

// Test Case 7: Verify memoization version matches
console.log('Test 7 - fibMemo(10):', fibMemo(10)); // Expected: 55

// Test Case 8: Larger number F(30) = 832040
console.log('Test 8 - fib(30):', fib(30)); // Expected: 832040
