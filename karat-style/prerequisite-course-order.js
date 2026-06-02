// TODO: implement
// coding interview sample (Karat-style)

/**
 * Prerequisite Course Order
 *
 * Problem Summary:
 *   You're given a list of (prereq, course) pairs meaning "to take `course`,
 *   you must FIRST have taken `prereq`." Return a VALID order in which you
 *   could take all courses, or empty if any cycle exists.
 *
 *   Part 2 (extension): given a CURRENT semester (already-completed courses),
 *   return the courses you could take NEXT (all prereqs satisfied).
 *
 *   This is a classic Karat (and Microsoft/Google) onsite. Tests topological
 *   sort on a DAG built from text-style input.
 *
 * Input:
 *   prereqs: Array of [prereqCourse, course]
 * Output:
 *   string[]  one valid topological order (any one is fine)
 *
 * Example:
 *   prereqs = [
 *     ["Intro to Algo",   "Algorithms"],
 *     ["Foundations of CS","Intro to Algo"],
 *     ["Algorithms",      "Advanced Algorithms"],
 *     ["Foundations of CS","Data Structures"],
 *   ]
 *   → ["Foundations of CS","Intro to Algo","Data Structures","Algorithms","Advanced Algorithms"]
 *     (one valid order)
 *
 * Approach (Kahn's BFS):
 *   1. Build adjacency list and in-degree counts. Track ALL distinct
 *      course names (including those only as prereqs).
 *   2. Push 0-in-degree courses into a queue.
 *   3. Pop, append to output, decrement neighbors' in-degrees, enqueue any
 *      that hit 0.
 *   4. If output.length !== total courses → cycle → return [].
 *
 * Why Kahn's:
 *   Clean termination on cycle (we don't reach all nodes). DFS post-order
 *   reversal works too — pick whichever is more comfortable.
 *
 * Time:  O(V + E)
 * Space: O(V + E)
 *
 * Edge Cases:
 *   - Empty prereqs → []
 *   - Self-loop ("A","A") → cycle → []
 *   - Disconnected DAGs → all components included; ordering valid
 *   - Duplicate edges → don't double-count in in-degree
 */

/**
 * @param {[string, string][]} prereqs
 * @returns {string[]}
 */
const courseOrder = (prereqs) => {
  // your code here
};

/**
 * Part 2 — courses currently eligible to enroll in.
 * @param {[string, string][]} prereqs
 * @param {Set<string>} completed
 * @returns {string[]}   (any order)
 */
const eligibleNow = (prereqs, completed) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Prerequisite Course Order ===\n');

const prereqs = [
  ['Intro to Algo', 'Algorithms'],
  ['Foundations of CS', 'Intro to Algo'],
  ['Algorithms', 'Advanced Algorithms'],
  ['Foundations of CS', 'Data Structures'],
];

console.log('Test 1 — full order:');
console.log(courseOrder(prereqs));
// Expected: a valid topological order

console.log('\nTest 2 — cycle:');
console.log(courseOrder([['A', 'B'], ['B', 'A']]));
// Expected: []

console.log('\nTest 3 — Part 2: eligible after FoCS done:');
console.log(eligibleNow(prereqs, new Set(['Foundations of CS'])));
// Expected: ["Intro to Algo","Data Structures"] (any order)
