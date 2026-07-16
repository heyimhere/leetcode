const isValidSudoku = (board) => {
  const rows = new Array.from({ length: 9 }, () => new Set());
  const cols = new Array.from({ length: 9 }, () => new Set());
  const boxes = new Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[b].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[b].add(val);
    }
  }
  return true;
};

const isValidSudokuB = (board) => {
  const seen = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      const keys = [`r${r}:${val}`, `c${c}:${val}`, `b${b}:${val}`];

      for (const k of keys) {
        if (seen.has(k)) return false;

        seen.add(val);
      }
    }
  }
  return true;
}

const validBoard = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// Same as validBoard but with an extra '8' at [0][0], colliding on the
// column (already an 8 at [3][0]) AND the top-left 3x3 box.
const invalidBoard = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(validBoard));    // true
console.log(isValidSudoku(invalidBoard));  // false

console.log(isValidSudokuB(validBoard));   // true
console.log(isValidSudokuB(invalidBoard)); // false
