const spiralOrder = (matrix) => {
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let top = 0;
  let result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};

console.log(
  "spiral 1",
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

console.log(
  "spiral 2",
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
