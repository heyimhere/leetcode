// TODO: implement
// coding interview sample (Karat-style)

/**
 * Mini Spreadsheet Evaluator
 *
 * Problem Summary:
 *   A spreadsheet maps cell IDs (like "A1", "B2") to either a number
 *   (e.g. "12") or a formula (e.g. "=A1+B2-3"). Evaluate every cell;
 *   return a Map<cellId, number>. Detect CYCLES and raise/return an error.
 *
 *   Part 2 (extension): allow MULTIPLY and parentheses in formulas.
 *
 *   This is the legendary Karat "spreadsheet" / "JSON-evaluator" problem.
 *   Tests careful parsing, DFS with cycle detection, and memoization.
 *
 * Input / Output:
 *   sheet: Map<cellId, string>      // raw cell contents (numeric or "=expr")
 *   Returns: Map<cellId, number>    // resolved values
 *   On a cycle: throw an Error or return null (spec-dependent).
 *
 * Example:
 *   sheet = new Map([
 *     ["A1", "3"],
 *     ["B1", "=A1+2"],
 *     ["C1", "=B1+A1"],
 *   ])
 *   evaluate(sheet) → Map { "A1" => 3, "B1" => 5, "C1" => 8 }
 *
 *   Cycle:
 *     A1 = "=B1", B1 = "=A1"  → error.
 *
 * Approach (DFS with three-color marking + memo):
 *   colors: Map<cellId, "white" | "gray" | "black">
 *   value:  Map<cellId, number>
 *
 *   eval(cellId):
 *     if colors[cellId] === "black" → value[cellId]
 *     if colors[cellId] === "gray"  → CYCLE
 *     colors[cellId] = "gray"
 *     raw = sheet.get(cellId)
 *     if raw starts with "=":
 *       parse the expression; for each cell reference, recursively eval.
 *       Compute the result (+, -, parens, etc.).
 *     else:
 *       result = Number(raw)
 *     value[cellId] = result
 *     colors[cellId] = "black"
 *     return result
 *
 * Why three-color DFS:
 *   White = not yet seen. Gray = on the current call stack. Black = done.
 *   Hitting a gray cell means the current path revisited an ancestor —
 *   a cycle. Black cells are safe to short-circuit via memo.
 *
 * Parser for Part 2:
 *   Use a Pratt parser, shunting-yard, or recursive descent — your choice.
 *   Tokenize first to keep recursion clean.
 *
 * Time:  O(C + E)   C = number of cells, E = total references
 * Space: O(C)
 *
 * Edge Cases:
 *   - Undefined cell reference         → error
 *   - Self-reference ("A1" = "=A1")    → cycle
 *   - Numeric cell with whitespace     → trim
 *   - Very deep dependency chain       → consider iterative tear-down
 */

/**
 * @param {Map<string, string>} sheet
 * @returns {Map<string, number>}
 * @throws on cycle
 */
const evaluateSheet = (sheet) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Mini Spreadsheet Evaluator ===\n');

console.log('Test 1 — simple chain:');
console.log(evaluateSheet(new Map([
  ['A1', '3'],
  ['B1', '=A1+2'],
  ['C1', '=B1+A1'],
])));
// Expected: Map { 'A1' => 3, 'B1' => 5, 'C1' => 8 }

console.log('\nTest 2 — independent cells:');
console.log(evaluateSheet(new Map([
  ['A1', '10'],
  ['B1', '20'],
])));
// Expected: Map { 'A1' => 10, 'B1' => 20 }

console.log('\nTest 3 — cycle (should throw or return null):');
try {
  console.log(evaluateSheet(new Map([['A1', '=B1'], ['B1', '=A1']])));
} catch (e) {
  console.log('Cycle detected:', e.message);
}
// Expected: cycle reported
