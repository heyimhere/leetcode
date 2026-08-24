// Karat-style — Find All Ancestors in a DAG   [Medium]   Pattern: Graphs
//
// You are given a directed acyclic graph with n nodes labeled 0 to n - 1,
// and a list of directed edges where edges[i] = [from, to].
//
// Return an array where result[i] is the SORTED list of every ancestor of
// node i. A node u is an ancestor of v if there is a directed path from
// u to v. A node is not its own ancestor.
//
// Example 1:
//   Input: n = 5, edges = [[0,1],[0,2],[1,3],[2,3],[3,4]]
//
//           0
//          / \
//         v   v
//         1   2
//          \ /
//           v
//           3
//           |
//           v
//           4
//
//   Output: [[], [0], [0], [0,1,2], [0,1,2,3]]
//
// Example 2:
//   Input: n = 3, edges = []
//   Output: [[],[],[]]
//
// Example 3:
//   Input: n = 2, edges = [[0,1]]
//   Output: [[],[0]]
//
// Follow-up the interviewer usually asks: given two nodes, do they share
// at least one common ancestor?

const getAncestors = (n, edges) => {

};

console.log(getAncestors(5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]));
// expected: [[],[0],[0],[0,1,2],[0,1,2,3]]
console.log(getAncestors(3, []));        // expected: [[],[],[]]
console.log(getAncestors(2, [[0, 1]]));  // expected: [[],[0]]
