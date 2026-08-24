// LC #207 — Course Schedule   [Medium]   Pattern: Graphs
//
// There are numCourses courses labeled 0 to numCourses - 1. You are given
// prerequisites, where prerequisites[i] = [a, b] means you must take course
// b BEFORE course a.
//
// Return true if it is possible to finish all courses.
//
// Example 1:
//   Input:  numCourses = 2, prerequisites = [[1,0]]
//   Output: true     (take 0, then 1)
// Example 2:
//   Input:  numCourses = 2, prerequisites = [[1,0],[0,1]]
//   Output: false    (each course requires the other)
// Example 3:
//   Input:  numCourses = 5, prerequisites = [[1,0],[2,1],[3,2],[4,3]]
//   Output: true
//
// Constraints:
//   1 <= numCourses <= 2000
//   0 <= prerequisites.length <= 5000
//   prerequisites[i].length === 2
//   0 <= a, b < numCourses
//   All prerequisite pairs are distinct.

const canFinish = (numCourses, prerequisites) => {

};

console.log(canFinish(2, [[1, 0]]));                                   // expected: true
console.log(canFinish(2, [[1, 0], [0, 1]]));                           // expected: false
console.log(canFinish(5, [[1, 0], [2, 1], [3, 2], [4, 3]]));           // expected: true
