// Karat-style — Sparse Vector Dot Product   [Medium]   Pattern: Hashmap / Design
//
// Implement a SparseVector class for vectors where most entries are zero.
//
//   SparseVector(nums)     builds the vector from a dense array
//   dotProduct(other)      returns the dot product with another SparseVector
//
// The dot product is the sum of nums[i] * other[i] across every index.
//
// Example 1:
//   v1 = SparseVector([1,0,0,2,3])
//   v2 = SparseVector([0,3,0,4,0])
//   v1.dotProduct(v2) -> 8        (2*4)
//
// Example 2:
//   v1 = SparseVector([0,1,0,0,0])
//   v2 = SparseVector([0,0,0,0,2])
//   v1.dotProduct(v2) -> 0
//
// Example 3:
//   v1 = SparseVector([0,1,0,0,2,0,0])
//   v2 = SparseVector([1,0,0,0,3,0,4])
//   v1.dotProduct(v2) -> 6        (2*3)
//
// Constraints:
//   Both vectors have the same length n, with 1 <= n <= 10^5.
//   -100 <= nums[i] <= 100
//
// Follow-ups the interviewer usually asks: what if one vector is far
// sparser than the other, and what if the vectors are too large to fit
// in memory at once?

class SparseVector {
  constructor(nums) {

  }

  dotProduct(other) {

  }
}

console.log(new SparseVector([1, 0, 0, 2, 3]).dotProduct(new SparseVector([0, 3, 0, 4, 0])));
// expected: 8
console.log(new SparseVector([0, 1, 0, 0, 0]).dotProduct(new SparseVector([0, 0, 0, 0, 2])));
// expected: 0
console.log(new SparseVector([0, 1, 0, 0, 2, 0, 0]).dotProduct(new SparseVector([1, 0, 0, 0, 3, 0, 4])));
// expected: 6
