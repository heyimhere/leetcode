// LC #973 — K Closest Points to Origin   [Medium]   Pattern: Heap
//
// Given an array points where points[i] = [xi, yi] represents a point on the
// X-Y plane, and an integer k, return the k points closest to the origin
// (0, 0).
//
// Distance here is standard Euclidean distance. The answer may be returned
// in any order, and it is guaranteed to be unique (except for that ordering).
//
// Example 1:
//   Input:  points = [[1,3],[-2,2]], k = 1
//   Output: [[-2,2]]
// Example 2:
//   Input:  points = [[3,3],[5,-1],[-2,4]], k = 2
//   Output: [[3,3],[-2,4]]
// Example 3:
//   Input:  points = [[0,1],[1,0]], k = 2
//   Output: [[0,1],[1,0]]
//
// Constraints:
//   1 <= k <= points.length <= 10^4
//   -10^4 <= xi, yi <= 10^4

const kClosest = (points, k) => {

};

console.log(kClosest([[1, 3], [-2, 2]], 1));              // expected: [[-2,2]]
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));     // expected: [[3,3],[-2,4]] (any order)
console.log(kClosest([[0, 1], [1, 0]], 2));               // expected: [[0,1],[1,0]] (any order)
