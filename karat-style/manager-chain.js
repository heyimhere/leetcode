// coding interview sample (Karat-style)

/**
 * Manager Chain & Lowest Common Manager
 *
 * Problem Summary:
 * Given a list of [employee, manager] pairs representing reporting relationships,
 * build two utilities:
 *   1. managerChain(pairs, employee)
 *      → return the chain of command from `employee` up to the CEO
 *        (i.e. the root of the org tree). Includes `employee` at the start.
 *   2. lowestCommonManager(pairs, employeeA, employeeB)
 *      → return the lowest (most-specific) manager who has both employees
 *        somewhere beneath them. This is the org-chart version of LCA.
 *
 * Karat asks variants of this constantly. It's also conceptually the same
 * as LC #236 Lowest Common Ancestor of a Binary Tree, but on an org tree
 * represented as child → parent edges.
 *
 * Input: Array of [employee, manager] pairs. The CEO has no manager and
 *        does NOT appear as the first element in any pair.
 *
 * Example org:
 *           CEO
 *          /   \
 *        VP1   VP2
 *        / \     \
 *      Mgr1 Mgr2  Mgr3
 *      /    /  \    \
 *    Alice Bob Carol Dana
 *
 *   pairs = [
 *     ["VP1","CEO"], ["VP2","CEO"],
 *     ["Mgr1","VP1"], ["Mgr2","VP1"], ["Mgr3","VP2"],
 *     ["Alice","Mgr1"], ["Bob","Mgr2"], ["Carol","Mgr2"], ["Dana","Mgr3"],
 *   ]
 *
 *   managerChain(pairs, "Alice")          → ["Alice", "Mgr1", "VP1", "CEO"]
 *   lowestCommonManager(pairs, "Bob","Carol")  → "Mgr2"
 *   lowestCommonManager(pairs, "Alice","Bob")  → "VP1"
 *   lowestCommonManager(pairs, "Alice","Dana") → "CEO"
 *
 * Approach:
 *   Build a Map<employee, manager>. Then:
 *   - managerChain: walk parent pointers until you hit someone with no manager.
 *   - lowestCommonManager:
 *       a) Get the full chain of A (a list from A → ... → CEO).
 *       b) Stuff that chain into a Set for O(1) lookup.
 *       c) Walk B's chain upward; the first ancestor present in A's Set is the LCM.
 *
 * Why this works:
 *   Any common manager must appear in BOTH chains. The first one encountered
 *   while walking B upward is guaranteed to be the lowest, because we walk
 *   B from the bottom up.
 *
 * Time:
 *   - managerChain:        O(H)  where H = tree height
 *   - lowestCommonManager: O(H)  (build set + walk)
 * Space: O(N) for the parent map + O(H) for the chain.
 *
 * Edge Cases:
 *   - Employee not in graph              → empty chain / null LCM
 *   - One employee is the other's manager → that employee is the LCM itself
 *   - Same employee twice                → that employee is the LCM
 *   - CEO has no manager                 → chain ends at CEO
 */

/**
 * Builds a Map of employee → direct manager.
 * @param {string[][]} pairs - Array of [employee, manager] pairs
 * @returns {Map<string, string>}
 */
const buildOrgMap = (pairs) => {
  // your code here
};

/**
 * Returns the chain of command from employee up to the CEO (inclusive).
 * @param {string[][]} pairs
 * @param {string} employee
 * @returns {string[]}
 */
const managerChain = (pairs, employee) => {
  // your code here
};

/**
 * Returns the lowest (most specific) manager that has both employees beneath them.
 * @param {string[][]} pairs
 * @param {string} employeeA
 * @param {string} employeeB
 * @returns {string | null}
 */
const lowestCommonManager = (pairs, employeeA, employeeB) => {
  // your code here
};

// ============ Test Cases ============

const org = [
  ['VP1', 'CEO'],
  ['VP2', 'CEO'],
  ['Mgr1', 'VP1'],
  ['Mgr2', 'VP1'],
  ['Mgr3', 'VP2'],
  ['Alice', 'Mgr1'],
  ['Bob', 'Mgr2'],
  ['Carol', 'Mgr2'],
  ['Dana', 'Mgr3'],
];

console.log('=== Manager Chain & LCM ===\n');

console.log('Test 1 — Chain for Alice:');
console.log(managerChain(org, 'Alice'));
// Expected: ['Alice', 'Mgr1', 'VP1', 'CEO']

console.log('\nTest 2 — Chain for CEO:');
console.log(managerChain(org, 'CEO'));
// Expected: ['CEO']

console.log('\nTest 3 — LCM of Bob & Carol (same manager):');
console.log(lowestCommonManager(org, 'Bob', 'Carol'));
// Expected: 'Mgr2'

console.log('\nTest 4 — LCM of Alice & Bob (different subtrees, same VP):');
console.log(lowestCommonManager(org, 'Alice', 'Bob'));
// Expected: 'VP1'

console.log('\nTest 5 — LCM of Alice & Dana (different VPs):');
console.log(lowestCommonManager(org, 'Alice', 'Dana'));
// Expected: 'CEO'

console.log('\nTest 6 — LCM where one is the other\'s manager:');
console.log(lowestCommonManager(org, 'Mgr1', 'Alice'));
// Expected: 'Mgr1'

console.log('\nTest 7 — Unknown employee:');
console.log(managerChain(org, 'Ghost'));
console.log(lowestCommonManager(org, 'Ghost', 'Alice'));
// Expected: [] and null
