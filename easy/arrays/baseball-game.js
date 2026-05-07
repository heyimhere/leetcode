const op = ["5", "2", "C", "D", "+"];

/**
 * Baseball Game - LeetCode #682
 * 
 * Problem Summary:
 * Given a list of operations, calculate the sum of scores in a baseball game.
 * - Integer: Record a new score.
 * - "+": Record sum of previous two scores.
 * - "D": Record double of previous score.
 * - "C": Invalidate (remove) the previous score.
 * 
 * Possible Approaches:
 * 1. Stack (Optimal): Use a stack to track valid scores. Push/pop as needed.
 * 2. Array with index tracking: Similar to stack but manually manage index.
 * 3. Linked List: Overkill for this problem, unnecessary complexity.
 * 
 * Chosen Approach: Stack
 * - Stack is ideal because operations depend on the most recent scores (LIFO).
 * - "C" removes the last score (pop), "+"/D" reference the top elements.
 * 
 * Algorithm Steps:
 * 1. Initialize an empty stack to store valid scores.
 * 2. Iterate through each operation:
 *    - If "+": Push sum of last two scores onto stack.
 *    - If "D": Push double of last score onto stack.
 *    - If "C": Pop the last score from stack.
 *    - Otherwise: Parse integer and push onto stack.
 * 3. Return the sum of all scores in the stack.
 * 
 * Why This Works:
 * - Stack maintains order of valid scores, allowing O(1) access to recent scores.
 * - Each operation is processed exactly once with constant-time stack operations.
 * 
 * Time Complexity: O(n) - Single pass through operations, O(n) to sum at end.
 * Space Complexity: O(n) - Stack stores at most n scores.
 * 
 * Key Patterns: Stack, Simulation
 * 
 * Edge Cases:
 * - Empty operations array: Returns 0 (empty stack sum).
 * - All "C" operations: Stack becomes empty, sum is 0.
 * - Negative numbers: Handled correctly by parseInt.
 */
const calPoints = (operations) => {
  const stack = [];
  
  for (const op of operations) {
    if (op === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(op));
    }
  }
  
  return stack.reduce((sum, score) => sum + score, 0);
};


console.log('calculate points', calPoints(op));
