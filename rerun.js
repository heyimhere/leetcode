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

