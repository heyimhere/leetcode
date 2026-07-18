// LC #128 — Longest Consecutive Sequence
//
// Given an unsorted array of integers, return the length of the longest
// sequence of consecutive integers. The elements can appear in any order
// in the input; we only care about numeric consecutiveness.
//
// Examples:
//   [100, 4, 200, 1, 3, 2]      -> 4   (the run 1,2,3,4)
//   [0,3,7,2,5,8,4,6,0,1]       -> 9   (0..8)
//   []                          -> 0
//   [1, 2, 0, 1]                -> 3   (0,1,2 — duplicates don't extend)
//
// Constraint that shapes the solution:
//   O(n) time. Sorting solves this in O(n log n) but the problem is
//   specifically pushing us past that.
//
// Intuition:
//   To go faster than sort, we need O(1) "does x+1 exist?" lookups —
//   that's a HashSet. The naive idea "for each num, walk num+1, num+2…
//   until the chain breaks" is O(n^2) in the worst case: on input
//   [1..n], starting from 1 walks n, from 2 walks n-1, and so on.
//   The same chain gets re-walked from every entry.
//
//   The fix: only start walking a chain from its BEGINNING. A number
//   `num` is a sequence start iff `num - 1` is NOT in the set. If num-1
//   exists, some earlier/later iteration will start the walk from the
//   real beginning and count this element then — so we skip.
//
//   With that guard, every element is touched at most twice across the
//   whole algorithm: once by the outer loop, and at most once while
//   being walked as part of its sequence. Total work <= 2n → O(n).
//   This is what "amortized O(n)" means here: any single outer-loop
//   iteration can look expensive (walking a length-k chain does k work),
//   but summed across the run, no element is ever re-walked, so the
//   average per element is O(1).
//
// Approach (HashSet + start-only walk):
//   1. Put every number into a Set (dedupes + O(1) lookup).
//   2. best = 0.
//   3. For each num in the set:
//        a. If set.has(num - 1) -> not a start, skip.
//        b. Else, let cur = num, len = 1.
//           While set.has(cur + 1): cur++; len++.
//        c. best = Math.max(best, len).
//   4. Return best.
//
// Alternate approaches:
//   1. Sort + linear scan — O(n log n) time, O(1) extra space if you
//      sort in place. Cleanest fallback if the O(n) constraint is
//      dropped, and worth mentioning as the "obvious" solve. See
//      longestConsecutiveSort below.
//   2. Union-Find — union each num with num-1 and num+1 when present;
//      answer is the size of the largest component. O(n α(n)) ≈ O(n),
//      but heavy machinery for something a HashSet handles cleanly.
//      Nice to know exists; overkill for interview recall.
//
// Complexity of the chosen solution:
//   Time:  O(n) amortized. Each element is inserted once and visited
//          at most twice (outer loop + at most one chain walk). The
//          `has(num - 1)` guard is what keeps the total bounded.
//   Space: O(n) for the Set.

const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let best = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue; // not a sequence start

    let cur = num;
    let len = 1;
    while (set.has(cur + 1)) {
      cur++;
      len++;
    }

    best = Math.max(best, len);
  }

  return best;
};

// ---
// Variant B — sort + linear scan.
// The O(n log n) baseline. Sort, then walk the array counting the
// current run, resetting when we see a gap and skipping duplicates.
// Prefer this if the O(n) constraint is dropped or if you want O(1)
// extra space (aside from sort's own overhead).

const longestConsecutiveSort = (nums) => {
  if (nums.length === 0) return 0;

  const sorted = [...nums].sort((a, b) => a - b);
  let best = 1;
  let cur = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) continue;         // duplicate
    if (sorted[i] === sorted[i - 1] + 1) {
      cur++;                                            // extend run
    } else {
      cur = 1;                                          // gap: reset
    }
    best = Math.max(best, cur);
  }

  return best;
};

// --- Tests ---

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));            // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));    // 9
console.log(longestConsecutive([]));                                 // 0
console.log(longestConsecutive([1, 2, 0, 1]));                       // 3
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7 (-1..5? actually 3,4,5,6,7,8,9)

console.log(longestConsecutiveSort([100, 4, 200, 1, 3, 2]));         // 4
console.log(longestConsecutiveSort([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutiveSort([]));                              // 0
console.log(longestConsecutiveSort([1, 2, 0, 1]));                    // 3
