// TODO: implement
// LC #804 — Unique Morse Code Words
//
// Given an array of lowercase `words`, encode each word to Morse using a
// fixed cipher (a → ".-", b → "-...", ..., z → "--.."), and return the
// number of DISTINCT encoded transformations.
//
// Example:
//   words = ["gin","zen","gig","msg"]
//   Encoded:  "gin" → "--...-."
//             "zen" → "--...-."
//             "gig" → "--...--."
//             "msg" → "--...--."
//   Distinct: 2 (the two unique transformations)
//
// Approach (Set of encoded strings):
//   1. morse table: const M = [".-", "-...", "-.-.", ..., "--.."]
//   2. For each word, build its encoding by concatenating M[c - 'a'] for
//      each char.
//   3. Add encoding to a Set; return set.size at the end.
//
// Why a Set:
//   We just need DISTINCT counts. Sets are the natural data structure for
//   "how many unique things did I see."
//
// Time:  O(N × L)  where N = #words, L = avg word length
// Space: O(N × L)  for the set of encodings
//
// Edge Cases:
//   - Single word                     → 1
//   - Identical words                 → 1
//   - All distinct encodings          → words.length
//   - Two different words, same code  → 1 (homophones)

const MORSE = [
  '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..',
  '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.',
  '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..',
];

/**
 * @param {string[]} words
 * @returns {number}
 */
const uniqueMorseRepresentations = (words) => {
  // your code here
};

console.log('=== LC #804 Unique Morse Code Words ===\n');

console.log('Test 1:');
console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
// Expected: 2

console.log('\nTest 2 — all same word:');
console.log(uniqueMorseRepresentations(['abc', 'abc', 'abc']));
// Expected: 1

console.log('\nTest 3 — singleton:');
console.log(uniqueMorseRepresentations(['a']));
// Expected: 1
