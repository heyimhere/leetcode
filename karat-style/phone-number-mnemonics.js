// TODO: implement
// coding interview sample (Karat-style)

/**
 * Phone Number Mnemonics
 *
 * Problem Summary:
 *   Given a phone number string of digits 0-9, return all letter
 *   "mnemonics" the number could spell on a phone keypad. Digits 0 and 1
 *   don't map to letters; treat them as literal characters in the output
 *   (some variants drop them entirely — note your convention).
 *
 *   Keypad:
 *     2: abc   3: def   4: ghi   5: jkl
 *     6: mno   7: pqrs  8: tuv   9: wxyz
 *
 *   Part 2 (the classic extension): given a dictionary of WORDS, return
 *   ONLY mnemonics that are real words. Build a trie of the dictionary
 *   and prune the DFS as you go.
 *
 *   Karat / Roblox / DoorDash classic.
 *
 * Input:
 *   number: string of digits
 * Output:
 *   string[]
 *
 * Example:
 *   number = "23"  → ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *   number = ""    → []  (or [""], depending on spec)
 *   number = "1"   → ["1"]
 *
 * Approach (DFS / backtracking):
 *   keypad = { "2": "abc", ..., "9": "wxyz", "0": "0", "1": "1" }
 *
 *   dfs(idx, curr):
 *     if idx === number.length → result.push(curr); return
 *     for c in keypad[number[idx]]:
 *       dfs(idx + 1, curr + c)
 *
 *   Call dfs(0, "").
 *
 * Why backtracking:
 *   Mirrors LC #17 exactly. Generalizes cleanly to the word-dictionary
 *   pruning version (Part 2).
 *
 * Time:  O(4^N × N)   (up to 4 letters per digit; 7 and 9 have 4)
 * Space: O(N) recursion; output excluded
 *
 * Edge Cases:
 *   - Empty number                  → spec-dependent ([""] or [])
 *   - Digits 0/1 in middle          → embed literal characters
 *   - Long numbers                  → exponential output; cap length in
 *                                      production
 */

const KEYPAD = {
  '0': '0', '1': '1',
  '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
  '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz',
};

/**
 * @param {string} number
 * @returns {string[]}
 */
const phoneMnemonics = (number) => {
  // your code here
};

/**
 * Part 2 — only return mnemonics that are in `dictionary`.
 * @param {string} number
 * @param {Set<string>} dictionary
 * @returns {string[]}
 */
const phoneMnemonicsInDictionary = (number, dictionary) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Phone Number Mnemonics ===\n');

console.log('Test 1:');
console.log(phoneMnemonics('23'));
// Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log('\nTest 2 — with literal 1:');
console.log(phoneMnemonics('12'));
// Expected: ["1a","1b","1c"]

console.log('\nTest 3 — Part 2 dictionary filter:');
console.log(phoneMnemonicsInDictionary('23', new Set(['ad', 'be', 'zoo'])));
// Expected: ['ad','be']
