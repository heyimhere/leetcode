// LC #210 — Course Schedule II   [Medium]   Pattern: Graphs
//
// There are numCourses courses labeled 0 to numCourses - 1. You are given
// prerequisites, where prerequisites[i] = [a, b] means course b must be
// taken BEFORE course a.
//
// Return any valid ordering of courses that lets you finish all of them.
// If no such ordering exists, return an empty array.
//
// Example 1:
//   Input:  numCourses = 2, prerequisites = [[1,0]]
//   Output: [0,1]
// Example 2:
//   Input:  numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
//   Output: [0,1,2,3]     ([0,2,1,3] is also valid)
// Example 3:
//   Input:  numCourses = 1, prerequisites = []
//   Output: [0]
// Example 4:
//   Input:  numCourses = 2, prerequisites = [[1,0],[0,1]]
//   Output: []
//
// Constraints:
//   1 <= numCourses <= 2000
//   0 <= prerequisites.length <= numCourses * (numCourses - 1)
//   0 <= a, b < numCourses, and a !== b
//   All prerequisite pairs are distinct.

const findOrder = (numCourses, prerequisites) => {

};

console.log(findOrder(2, [[1, 0]]));                                 // expected: [0,1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));         // expected: [0,1,2,3] (any valid order)
console.log(findOrder(1, []));                                        // expected: [0]
console.log(findOrder(2, [[1, 0], [0, 1]]));                          // expected: []
