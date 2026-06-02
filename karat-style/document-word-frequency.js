// TODO: implement
// coding interview sample (Karat-style)

/**
 * Document Word Frequency / Similarity
 *
 * Problem Summary:
 *   You're given two documents as strings. Implement:
 *
 *     1. topKWords(doc, k):       — return the k most frequent words in
 *                                    one document, sorted desc by frequency,
 *                                    ties broken alphabetically.
 *
 *     2. similarity(docA, docB):  — return the SHARED-word frequency
 *                                    score: sum of min(countA[w], countB[w])
 *                                    over all words w in BOTH docs. Or
 *                                    return the list of common words with
 *                                    their min counts.
 *
 *   Treat words as runs of letters; lowercase; punctuation is a separator.
 *
 *   Karat / Robinhood / Stripe — tests string tokenization + Map work.
 *
 * Input:
 *   doc / docA / docB: strings
 * Output:
 *   topKWords:   string[]
 *   similarity:  { score: number, common: Map<word, count> }
 *
 * Example:
 *   doc = "The cat sat on the mat. The mat was warm."
 *   topKWords(doc, 2) → ["the", "mat"]
 *     (the appears 3x, mat 2x)
 *
 *   docA = "the quick brown fox"
 *   docB = "the the quick"
 *   similarity(docA, docB) → { score: 2, common: Map { the => 1, quick => 1 } }
 *     (min(1,2)=1 for "the", min(1,1)=1 for "quick")
 *
 * Approach:
 *   tokenize(s):
 *     1. lowercase
 *     2. split on /[^a-z]+/
 *     3. filter out empty strings
 *
 *   topKWords:
 *     count words in a Map; sort entries by (-count, word); take k.
 *
 *   similarity:
 *     count each doc; for every word in the smaller map, look up in the
 *     larger; accumulate min(countA, countB).
 *
 * Why Map (not plain object):
 *   Preserves insertion order; cleaner iteration. Reasonable defaults vs
 *   prototype pollution.
 *
 * Time:
 *   topKWords: O(N + U log U) where U = distinct words
 *   similarity: O(NA + NB)
 * Space: O(U)
 *
 * Edge Cases:
 *   - Empty document             → []
 *   - k > distinct words         → return all
 *   - Mixed case ("The" vs "the") → normalize to lowercase
 *   - Punctuation-only text       → no words
 */

/**
 * @param {string} doc
 * @param {number} k
 * @returns {string[]}
 */
const topKWords = (doc, k) => {
  // your code here
};

/**
 * @param {string} docA
 * @param {string} docB
 * @returns {{ score: number, common: Map<string, number> }}
 */
const similarity = (docA, docB) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Document Word Frequency ===\n');

console.log('Test 1 — topKWords:');
console.log(topKWords('The cat sat on the mat. The mat was warm.', 2));
// Expected: ['the', 'mat']

console.log('\nTest 2 — similarity:');
console.log(similarity('the quick brown fox', 'the the quick'));
// Expected: { score: 2, common: Map { 'the' => 1, 'quick' => 1 } }

console.log('\nTest 3 — disjoint:');
console.log(similarity('foo bar', 'baz qux'));
// Expected: { score: 0, common: empty Map }

console.log('\nTest 4 — empty doc:');
console.log(topKWords('', 3));
// Expected: []
