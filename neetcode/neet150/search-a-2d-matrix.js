// LC #74 — Search a 2D Matrix
//
// You are given an m x n integer matrix with the following two properties:
//   - Each row is sorted in non-decreasing order.
//   - The first integer of each row is greater than the last integer of the
//     previous row.
// Given an integer target, return true if target is in the matrix, or false
// otherwise.
//
// The algorithm must run in O(log(m * n)) time.
//
// Examples:
//   matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3  -> true
//   matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 -> false
//
// Constraints:
//   m == matrix.length
//   n == matrix[i].length
//   1 <= m, n <= 100
//   -10^4 <= matrix[i][j], target <= 10^4
//
// Intuition:
//   The two properties together mean: read the matrix row by row, left to
//   right, and the values never go down. That's just a sorted 1D array of
//   length m * n wearing a 2D costume. So this is plain binary search #704
//   again — the only new part is translating a flat index back into
//   (row, col).
//
//   Flat index -> coordinates:
//     row = floor(mid / n)   (n = number of columns; each row "uses up" n
//                              flat indices before the next row starts)
//     col = mid % n          (position within that row)
//
// Approach (binary search over a virtual 1D array):
//   - n = number of columns
//   - l = 0, r = m * n - 1
//   - While l <= r:
//       mid = l + floor((r - l) / 2)
//       row = floor(mid / n), col = mid % n
//       val = matrix[row][col]
//       if val === target, return true
//       if val < target, set l = mid + 1
//       otherwise, set r = mid - 1
//   - Return false when the search window becomes empty.
//
// Common pitfalls:
//   - Don't binary search each row separately — that's O(m log n), which is
//     correct but throws away the fact that rows are globally ordered too.
//   - row = floor(mid / n), NOT mid / m — dividing by the wrong dimension
//     silently produces out-of-bounds rows for non-square matrices.
//
// Complexity of the chosen solution:
//   Time:  O(log(m * n)) — one binary search over all m * n cells; each step
//          halves the remaining window, same as LC #704.
//   Space: O(1)           — only a handful of integer indices are stored.

const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;

  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const val = matrix[row][col];

    if (val === target) return true;

    if (val < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};

console.log('target 3  ->', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));   // true
console.log('target 13 ->', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));  // false
console.log('target 1  ->', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 1));   // true
console.log('target 60 ->', searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60));  // true
console.log('target 0  ->', searchMatrix([[1]], 0));                                                 // false

// ---------------------------------------------------------------------------
// Alternate: two-phase binary search (row, then column)
//
// Same complexity class (O(log m + log n) === O(log(m * n))), but does it as
// two explicit, separate binary searches instead of one flat-index trick.
// Some people find this easier to reason about because each phase is a plain
// 1D binary search with no div/mod juggling — worth reaching for if the
// flat-index math above ever feels error-prone under pressure.
// ---------------------------------------------------------------------------
const searchMatrixB = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;

  // Phase 1: find the row whose range could contain target, by binary
  // searching the first column.
  let top = 0;
  let bottom = m - 1;

  while (top <= bottom) {
    const midRow = top + Math.floor((bottom - top) / 2);

    if (matrix[midRow][0] > target) {
      bottom = midRow - 1;
    } else if (matrix[midRow][n - 1] < target) {
      top = midRow + 1;
    } else {
      // target is within [matrix[midRow][0], matrix[midRow][n - 1]]
      let l = 0;
      let r = n - 1;

      while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (matrix[midRow][mid] === target) return true;

        if (matrix[midRow][mid] < target) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }

      return false;
    }
  }

  return false;
};
