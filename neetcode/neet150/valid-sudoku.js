// LC #36 — Valid Sudoku
//
// Given a 9x9 Sudoku board (partially filled, empty cells marked '.'),
// determine if the current placements are valid. You are NOT solving the
// puzzle — just checking that no digit currently repeats in any row, any
// column, or any 3x3 sub-box. Empty cells never cause a conflict.
//
// Examples:
//   board with no duplicates in rows/cols/boxes  -> true
//   two 8's in the same row                      -> false
//   two 5's in the same 3x3 box                  -> false
//
// Intuition:
//   The three rules (row / col / box) sound like three separate scans, but
//   they can all be checked in a single pass. At each filled cell we ask
//   one question: "have I already seen this digit in my row, my column, or
//   my 3x3 box?" That means we need 27 sets total: 9 for rows, 9 for cols,
//   9 for boxes. As we walk the grid, each digit gets checked against —
//   and then added to — its three sets.
//
//   The one trick: mapping (r, c) -> box index. The nine boxes form a 3x3
//   super-grid, so boxIdx = Math.floor(r/3) * 3 + Math.floor(c/3), giving
//   boxes numbered:
//        0 1 2
//        3 4 5
//        6 7 8
//
// Approach (Row/Col/Box Sets):
//   1. Create three arrays of 9 Sets: rows, cols, boxes.
//   2. Iterate every cell (r, c). Skip if '.'.
//   3. Compute b = Math.floor(r/3)*3 + Math.floor(c/3).
//   4. If any of rows[r], cols[c], boxes[b] already has the digit -> false.
//   5. Otherwise add the digit to all three sets and continue.
//   6. Finished the loop with no conflict -> true.
//
// Alternate approaches:
//   1. Single Set with encoded keys ("r3:5", "c7:5", "b4:5") — O(1) time,
//      O(1) space. Cleaner (one Set instead of 27) but string-building per
//      cell has a tiny constant overhead. See isValidSudokuB below.
//   2. Three 2D boolean arrays [9][9] — O(1) time, O(1) space. Micro-faster
//      than Sets (array index vs. hash) but slightly more setup. Pick this
//      only if you're squeezing constants; Sets read more clearly.
//
// Complexity of the chosen solution:
//   Time:  O(1) — the board is fixed 9x9 = 81 cells; each cell does 3 O(1)
//          Set ops. In generic n-terms it's O(n^2) where n = 9. Short-
//          circuits early on the first conflict found.
//   Space: O(1) — 27 Sets, each capped at 9 entries. Total bounded by 81
//          digit slots regardless of input.

const isValidSudoku = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

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

// ---
// Variant B — single Set with encoded keys.
// Prefer this when you want a slick, minimal-state solution. The idea:
// instead of tracking 27 separate sets, encode WHERE a digit lives as part
// of the key: `r${r}:${val}`, `c${c}:${val}`, `b${b}:${val}`. Any collision
// in the single Set means a duplicate in that row/col/box.
// Tradeoff vs. the main: less state to juggle, but you pay per-cell string
// concat and the intent is a hair less obvious at a glance. Same O(1)/O(1).

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
        seen.add(k);
      }
    }
  }

  return true;
};

// --- Tests ---

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
