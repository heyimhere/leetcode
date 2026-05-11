import type { Difficulty, Problem, Section } from './types';

function p(
  title: string,
  slug: string,
  difficulty: Difficulty,
  topic: string,
  opts: {
    lcNumber?: number | null;
    pattern?: string;
    tc?: string;
    sc?: string;
    hasContent?: boolean;
  } = {}
): Problem {
  return {
    title,
    slug,
    difficulty,
    topic,
    lcNumber: opts.lcNumber ?? null,
    pattern: opts.pattern ?? '—',
    timeComplexity: opts.tc ?? '—',
    spaceComplexity: opts.sc ?? '—',
    hasContent: opts.hasContent ?? false,
  };
}

export const manifest: Section[] = [
  {
    name: 'Easy',
    slug: 'easy',
    topics: [
      {
        name: 'Arrays',
        slug: 'arrays',
        problems: [
          p('Two Sum', 'two-sum', 'easy', 'arrays', { lcNumber: 1, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(n)', hasContent: true }),
          p('Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'easy', 'arrays', { lcNumber: 121, pattern: 'Sliding Window / Greedy', tc: 'O(n)', sc: 'O(1)', hasContent: true }),
          p('Merge Sorted Array', 'merge-sorted-array', 'easy', 'arrays', { lcNumber: 88, pattern: 'Two Pointers', tc: 'O(m+n)', sc: 'O(1)' }),
          p('Majority Element', 'majority-element', 'easy', 'arrays', { lcNumber: 169, pattern: "Boyer-Moore Voting", tc: 'O(n)', sc: 'O(1)' }),
          p('Remove Duplicates from Sorted Array', 'remove-duplicates-from-sorted-array', 'easy', 'arrays', { lcNumber: 26, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Remove Element', 'remove-element', 'easy', 'arrays', { lcNumber: 27, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Move Zeroes', 'move-zeroes', 'easy', 'arrays', { lcNumber: 283, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Plus One', 'plus-one', 'easy', 'arrays', { lcNumber: 66, pattern: 'Array', tc: 'O(n)', sc: 'O(1)' }),
          p('Search Insert Position', 'search-insert-position', 'easy', 'arrays', { lcNumber: 35, pattern: 'Binary Search', tc: 'O(log n)', sc: 'O(1)' }),
          p('Palindrome Number', 'palindrome-number', 'easy', 'arrays', { lcNumber: 9, pattern: 'Math', tc: 'O(log n)', sc: 'O(1)' }),
          p('Roman to Integer', 'roman-to-integer', 'easy', 'arrays', { lcNumber: 13, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(1)' }),
          p('Length of Last Word', 'length-of-last-word', 'easy', 'arrays', { lcNumber: 58, pattern: 'String / Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Longest Common Prefix', 'longest-common-prefix', 'easy', 'arrays', { lcNumber: 14, pattern: 'String', tc: 'O(n·m)', sc: 'O(1)' }),
          p('Intersection of Two Arrays', 'intersection-of-two-arrays', 'easy', 'arrays', { lcNumber: 349, pattern: 'Hash Set', tc: 'O(n+m)', sc: 'O(n)' }),
          p('Max Consecutive Ones', 'max-consecutive-ones', 'easy', 'arrays', { lcNumber: 485, pattern: 'Array', tc: 'O(n)', sc: 'O(1)' }),
          p('Running Sum of 1D Array', 'running-sum-of-oneD-array', 'easy', 'arrays', { lcNumber: 1480, pattern: 'Prefix Sum', tc: 'O(n)', sc: 'O(n)' }),
          p('Shuffle the Array', 'shuffle-the-array', 'easy', 'arrays', { lcNumber: 1470, pattern: 'Array', tc: 'O(n)', sc: 'O(n)' }),
          p('Kids With the Greatest Number of Candies', 'kids-with-the-greatest-number-of-candies', 'easy', 'arrays', { lcNumber: 1431, pattern: 'Array', tc: 'O(n)', sc: 'O(n)' }),
          p('Richest Customer Wealth', 'richest-customer-wealth', 'easy', 'arrays', { lcNumber: 1672, pattern: 'Array', tc: 'O(m·n)', sc: 'O(1)' }),
          p('Number of Good Pairs', 'number-of-good-pairs', 'easy', 'arrays', { lcNumber: 1512, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(n)' }),
          p('Final Value of Variable After Performing Operations', 'final-value-of-variable-after-performing-operations', 'easy', 'arrays', { lcNumber: 2011, pattern: 'Array / Simulation', tc: 'O(n)', sc: 'O(1)' }),
          p('Concatenation of Array', 'concatenation-of-array', 'easy', 'arrays', { lcNumber: 1929, pattern: 'Array', tc: 'O(n)', sc: 'O(n)' }),
          p('Build Array from Permutation', 'build-array-from-permutation', 'easy', 'arrays', { lcNumber: 1920, pattern: 'Array', tc: 'O(n)', sc: 'O(n)' }),
          p('Find Numbers with Even Number of Digits', 'find-numbers-with-even-number-of-digits', 'easy', 'arrays', { lcNumber: 1295, pattern: 'Array / Math', tc: 'O(n)', sc: 'O(1)' }),
          p('Baseball Game', 'baseball-game', 'easy', 'arrays', { lcNumber: 682, pattern: 'Stack', tc: 'O(n)', sc: 'O(n)' }),
          p('Can Place Flowers', 'can-place-flowers', 'easy', 'arrays', { lcNumber: 605, pattern: 'Greedy', tc: 'O(n)', sc: 'O(1)' }),
          p('Check If Two String Arrays Are Equivalent', 'check-if-two-string-arrays-are-equivalent', 'easy', 'arrays', { lcNumber: 1662, pattern: 'String', tc: 'O(n)', sc: 'O(n)' }),
          p('Count Good Triplets', 'count-good-triplets', 'easy', 'arrays', { lcNumber: 1534, pattern: 'Brute Force', tc: 'O(n³)', sc: 'O(1)' }),
          p('Count Pairs Whose Sum Is Less Than Target', 'count-pairs-who-sum-is-less-than-target', 'easy', 'arrays', { lcNumber: 2824, pattern: 'Two Pointers', tc: 'O(n log n)', sc: 'O(1)' }),
          p('Find Common Elements Between Two Arrays', 'find-common-elements-between-two-arrays', 'easy', 'arrays', { lcNumber: 2956, pattern: 'Hash Set', tc: 'O(n+m)', sc: 'O(n)' }),
          p('Find the Index of the First Occurrence in a String', 'find-the-index-of-the-first-occurence-in-a-string', 'easy', 'arrays', { lcNumber: 28, pattern: 'String', tc: 'O(n·m)', sc: 'O(1)' }),
          p('Find the Number of Good Pairs I', 'find-the-number-of-good-pairs-I', 'easy', 'arrays', { lcNumber: 3162, pattern: 'Array', tc: 'O(n·m)', sc: 'O(1)' }),
          p('Find the Peaks', 'find-the-peaks', 'easy', 'arrays', { lcNumber: 2951, pattern: 'Array', tc: 'O(n)', sc: 'O(k)' }),
          p('Find Words Containing Character', 'find-words-containing-characters', 'easy', 'arrays', { lcNumber: 2942, pattern: 'Array', tc: 'O(n·m)', sc: 'O(k)' }),
          p('How Many Numbers Are Smaller Than the Current Number', 'how-many-numbers-are-smaller-than-the-current-number', 'easy', 'arrays', { lcNumber: 1365, pattern: 'Sorting / Count', tc: 'O(n log n)', sc: 'O(n)' }),
          p('Implement Queue Using Stacks', 'implement-queue-using-stacks', 'easy', 'arrays', { lcNumber: 232, pattern: 'Stack', tc: 'O(1) amortized', sc: 'O(n)' }),
          p('Maximum Average Subarray I', 'maximum-average-subarray-I', 'easy', 'arrays', { lcNumber: 643, pattern: 'Sliding Window', tc: 'O(n)', sc: 'O(1)' }),
          p('Maximum Number of Words Found in Sentences', 'maximum-numnber-of-words-found-in-sentences', 'easy', 'arrays', { lcNumber: 2114, pattern: 'String / Array', tc: 'O(n·m)', sc: 'O(1)' }),
          p('Merge Two Sorted Lists', 'merge-two-sorted-lists', 'easy', 'arrays', { lcNumber: 21, pattern: 'Linked List / Two Pointers', tc: 'O(n+m)', sc: 'O(1)' }),
          p('Number of Employees Who Met the Target', 'number-of-employees-who-met-the-target', 'easy', 'arrays', { lcNumber: 2798, pattern: 'Array', tc: 'O(n)', sc: 'O(k)' }),
          p('Palindrome Linked List', 'palindrome-linked-list', 'easy', 'arrays', { lcNumber: 234, pattern: 'Two Pointers / Reverse', tc: 'O(n)', sc: 'O(1)' }),
          p('Sort the People', 'sort-the-people', 'easy', 'arrays', { lcNumber: 2418, pattern: 'Sorting', tc: 'O(n log n)', sc: 'O(n)' }),
          p('Summary Ranges', 'summary-ranges', 'easy', 'arrays', { lcNumber: 228, pattern: 'Array', tc: 'O(n)', sc: 'O(1)' }),
          p('Unique Number of Occurrences', 'unique-number-of-occurences', 'easy', 'arrays', { lcNumber: 1207, pattern: 'Hash Map + Set', tc: 'O(n)', sc: 'O(n)' }),
          p('Widest Vertical Area Between Two Points', 'widest-vertical-area-between-two-points-containing-no-points', 'easy', 'arrays', { lcNumber: 1637, pattern: 'Sorting', tc: 'O(n log n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Strings',
        slug: 'strings',
        problems: [
          p('Valid Palindrome', 'valid-palindrome', 'easy', 'strings', { lcNumber: 125, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)', hasContent: true }),
          p('Valid Parentheses', 'valid-parentheses', 'easy', 'strings', { lcNumber: 20, pattern: 'Stack', tc: 'O(n)', sc: 'O(n)' }),
          p('Reverse String', 'reverse-string', 'easy', 'strings', { lcNumber: 344, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Is Subsequence', 'is-subsequence', 'easy', 'strings', { lcNumber: 392, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Merge Strings Alternately', 'merge-strings-alternately', 'easy', 'strings', { lcNumber: 1768, pattern: 'Two Pointers', tc: 'O(n+m)', sc: 'O(n+m)' }),
          p('Greatest Common Divisor of Strings', 'greatest-common-divisor-of-strings', 'easy', 'strings', { lcNumber: 1071, pattern: 'Math / String', tc: 'O(n+m)', sc: 'O(n+m)' }),
          p('Reverse Vowels of a String', 'reverse-vowels-of-a-string', 'easy', 'strings', { lcNumber: 345, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Check If Two Strings Are Almost Equivalent', 'check-weather-two-strings-are-almost-equivalent', 'easy', 'strings', { lcNumber: 2068, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(1)' }),
          p('Permutation Difference Between Two Strings', 'premutation-difference-between-two-strings', 'easy', 'strings', { lcNumber: 3146, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(1)' }),
          p('Remove Vowels from a String', 'remove-vowels-from-a-string', 'easy', 'strings', { lcNumber: 1119, pattern: 'String', tc: 'O(n)', sc: 'O(n)' }),
          p('Score of a String', 'score-of-a-string', 'easy', 'strings', { lcNumber: 3110, pattern: 'String', tc: 'O(n)', sc: 'O(1)' }),
          p('Single Row Keyboard', 'single-row-keyboard', 'easy', 'strings', { lcNumber: 1165, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(1)' }),
          p('Split a String in Balanced Strings', 'split-a-string-in-balance-strins', 'easy', 'strings', { lcNumber: 1221, pattern: 'Greedy', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Hash Maps',
        slug: 'hashmaps',
        problems: [
          p('Valid Anagram', 'valid-anagram', 'easy', 'hashmaps', { lcNumber: 242, pattern: 'Frequency Count', tc: 'O(n)', sc: 'O(1)', hasContent: true }),
          p('Contains Duplicate', 'contains-duplicate', 'easy', 'hashmaps', { lcNumber: 217, pattern: 'Hash Set', tc: 'O(n)', sc: 'O(n)' }),
          p('Contains Duplicate II', 'contains-duplicates-two', 'easy', 'hashmaps', { lcNumber: 219, pattern: 'Hash Map / Sliding Window', tc: 'O(n)', sc: 'O(n)' }),
          p('Happy Number', 'happy-number', 'easy', 'hashmaps', { lcNumber: 202, pattern: 'Hash Set / Fast & Slow', tc: 'O(log n)', sc: 'O(log n)' }),
          p('Word Pattern', 'word-pattern', 'easy', 'hashmaps', { lcNumber: 290, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(n)' }),
          p('Is Isomorphic', 'is-isomorphic', 'easy', 'hashmaps', { lcNumber: 205, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(1)' }),
          p('Can Construct', 'can-construct', 'easy', 'hashmaps', { lcNumber: 383, pattern: 'Frequency Count', tc: 'O(n)', sc: 'O(1)' }),
          p('Longest Palindrome', 'longest-palindrome', 'easy', 'hashmaps', { lcNumber: 409, pattern: 'Frequency Count', tc: 'O(n)', sc: 'O(1)' }),
          p('Jewels and Stones', 'jewels-and-stones', 'easy', 'hashmaps', { lcNumber: 771, pattern: 'Hash Set', tc: 'O(j+s)', sc: 'O(j)' }),
          p('Largest Unique Number', 'largest-unique-number', 'easy', 'hashmaps', { lcNumber: 1133, pattern: 'Frequency Count', tc: 'O(n)', sc: 'O(n)' }),
          p('Minimum Common Value', 'minimum-common-value', 'easy', 'hashmaps', { lcNumber: 2540, pattern: 'Hash Set / Two Pointers', tc: 'O(n+m)', sc: 'O(n)' }),
          p('Find the Difference of Two Arrays', 'find-the-difference-of-two-arrays', 'easy', 'hashmaps', { lcNumber: 2215, pattern: 'Hash Set', tc: 'O(n+m)', sc: 'O(n+m)' }),
          p('Count Numbers with Unique Digits II', 'count-numbers-with-unique-digits-2', 'easy', 'hashmaps', { lcNumber: null, pattern: 'Backtracking / Math', tc: 'O(1)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Linked Lists',
        slug: 'linked-lists',
        problems: [
          p('Reverse Linked List', 'reverse-linked-list', 'easy', 'linked-lists', { lcNumber: 206, pattern: 'Linked List / Iteration', tc: 'O(n)', sc: 'O(1)' }),
          p('Linked List Cycle', 'linked-list-cycle', 'easy', 'linked-lists', { lcNumber: 141, pattern: 'Fast & Slow Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Remove Duplicates from Sorted List', 'remove-duplicates-from-sorted-list', 'easy', 'linked-lists', { lcNumber: 83, pattern: 'Linked List', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Trees',
        slug: 'tree',
        problems: [
          p('Maximum Depth of Binary Tree', 'maximum-depth-of-binary-tree', 'easy', 'tree', { lcNumber: 104, pattern: 'DFS / Recursion', tc: 'O(n)', sc: 'O(h)' }),
          p('Invert Binary Tree', 'invert-binary-tree', 'easy', 'tree', { lcNumber: 226, pattern: 'DFS / Recursion', tc: 'O(n)', sc: 'O(h)' }),
          p('Same Tree', 'same-tree', 'easy', 'tree', { lcNumber: 100, pattern: 'DFS / Recursion', tc: 'O(n)', sc: 'O(h)' }),
        ],
      },
      {
        name: 'Dynamic Programming',
        slug: 'dynamic-programming',
        problems: [
          p('Climbing Stairs', 'climbling-stairs', 'easy', 'dynamic-programming', { lcNumber: 70, pattern: 'Dynamic Programming (Fibonacci)', tc: 'O(n)', sc: 'O(1)' }),
          p('Fibonacci Number', 'fibonacci-number', 'easy', 'dynamic-programming', { lcNumber: 509, pattern: 'Dynamic Programming / Memoization', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Bit Manipulation',
        slug: 'bit-manipulation',
        problems: [
          p('Add Binary', 'add-binary', 'easy', 'bit-manipulation', { lcNumber: 67, pattern: 'Bit Manipulation / String', tc: 'O(n)', sc: 'O(n)' }),
          p('Counting Bits', 'counting-bits', 'easy', 'bit-manipulation', { lcNumber: 338, pattern: 'Dynamic Programming / Bits', tc: 'O(n)', sc: 'O(n)' }),
          p('Sum of Values at Indices with K Set Bits', 'sum-of-values-at-indices-with-k-set-bits', 'easy', 'bit-manipulation', { lcNumber: 2859, pattern: 'Bit Manipulation', tc: 'O(n·log n)', sc: 'O(1)' }),
        ],
      },
    ],
  },
  {
    name: 'Medium',
    slug: 'medium',
    topics: [
      {
        name: 'Arrays',
        slug: 'arrays',
        problems: [
          p('Group Anagrams', 'group-anagrams', 'medium', 'arrays', { lcNumber: 49, pattern: 'HashMap + Sorting', tc: 'O(n·k log k)', sc: 'O(nk)', hasContent: true }),
          p('3Sum', '3sum', 'medium', 'arrays', { lcNumber: 15, pattern: 'Sorting + Two Pointers', tc: 'O(n²)', sc: 'O(n)' }),
          p('Container With Most Water', 'container-with-most-water', 'medium', 'arrays', { lcNumber: 11, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Product of Array Except Self', 'product-of-array-except-self', 'medium', 'arrays', { lcNumber: 238, pattern: 'Prefix / Suffix Products', tc: 'O(n)', sc: 'O(n)' }),
          p('Top K Frequent Elements', 'top-k-frequent-elements', 'medium', 'arrays', { lcNumber: 347, pattern: 'Heap / Bucket Sort', tc: 'O(n log k)', sc: 'O(n)' }),
          p('Jump Game', 'jump-game', 'medium', 'arrays', { lcNumber: 55, pattern: 'Greedy', tc: 'O(n)', sc: 'O(1)' }),
          p('Jump Game II', 'jump-game-two', 'medium', 'arrays', { lcNumber: 45, pattern: 'Greedy / BFS', tc: 'O(n)', sc: 'O(1)' }),
          p('Rotate Array', 'rotate-array', 'medium', 'arrays', { lcNumber: 189, pattern: 'Array Reversal', tc: 'O(n)', sc: 'O(1)' }),
          p('Spiral Matrix', 'spiral-matrix', 'medium', 'arrays', { lcNumber: 54, pattern: 'Simulation', tc: 'O(m·n)', sc: 'O(1)' }),
          p('Coin Change', 'coin-change', 'medium', 'arrays', { lcNumber: 322, pattern: 'Dynamic Programming', tc: 'O(n·amount)', sc: 'O(amount)' }),
          p('Evaluate Reverse Polish Notation', 'evaluate-reverse-polish-notation', 'medium', 'arrays', { lcNumber: 150, pattern: 'Stack', tc: 'O(n)', sc: 'O(n)' }),
          p('Minimum Size Subarray Sum', 'minimum-size-subarray-sum', 'medium', 'arrays', { lcNumber: 209, pattern: 'Sliding Window', tc: 'O(n)', sc: 'O(1)' }),
          p('Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters', 'medium', 'arrays', { lcNumber: 3, pattern: 'Sliding Window', tc: 'O(n)', sc: 'O(min(n,m))' }),
          p('Remove Duplicates from Sorted Array II', 'remove-duplicates-from-sorted-array-two', 'medium', 'arrays', { lcNumber: 80, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('H-Index', 'h-index', 'medium', 'arrays', { lcNumber: 274, pattern: 'Sorting / Counting', tc: 'O(n log n)', sc: 'O(1)' }),
          p('Gas Station', 'gas-station', 'medium', 'arrays', { lcNumber: 134, pattern: 'Greedy', tc: 'O(n)', sc: 'O(1)' }),
          p('Min Stack', 'min-stack', 'medium', 'arrays', { lcNumber: 155, pattern: 'Stack', tc: 'O(1)', sc: 'O(n)' }),
          p('Increasing Triplet Subsequence', 'iincreasing-triplets-subsequence', 'medium', 'arrays', { lcNumber: 334, pattern: 'Greedy', tc: 'O(n)', sc: 'O(1)' }),
          p('Flatten Deeply Nested Array', 'flatten-deeply-nested-array', 'medium', 'arrays', { lcNumber: 2625, pattern: 'Recursion / DFS', tc: 'O(n)', sc: 'O(d)' }),
          p('Pairs of Songs With Total Durations Divisible by 60', 'pairs-of-songs-with-total-durations-divisible-by-60', 'medium', 'arrays', { lcNumber: 1010, pattern: 'Hash Map / Modulo', tc: 'O(n)', sc: 'O(1)' }),
          p('Loud and Rich', 'loud-and-rich', 'medium', 'arrays', { lcNumber: 851, pattern: 'Graph / DFS', tc: 'O(n²)', sc: 'O(n)' }),
          p('Get Payment Confirmation Status', 'get-payment-confirmation-status', 'medium', 'arrays', { lcNumber: null, pattern: 'Array / Simulation', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Strings',
        slug: 'strings',
        problems: [
          p('Longest Palindromic Substring', 'longest-palindrome-substring', 'medium', 'strings', { lcNumber: 5, pattern: 'Expand Around Center / DP', tc: 'O(n²)', sc: 'O(1)' }),
          p('Zigzag Conversion', 'zigzag-conversion', 'medium', 'strings', { lcNumber: 6, pattern: 'Simulation', tc: 'O(n)', sc: 'O(n)' }),
        ],
      },
      {
        name: 'Two Pointers',
        slug: 'two-pointer',
        problems: [
          p('Two Sum II — Input Array Is Sorted', 'two-sum-two-input-array-is-sorted', 'medium', 'two-pointer', { lcNumber: 167, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Reverse Words in a String', 'reverse-words-in-a-string', 'medium', 'two-pointer', { lcNumber: 151, pattern: 'Two Pointers / String', tc: 'O(n)', sc: 'O(n)' }),
          p('Max Number of K-Sum Pairs', 'max-number-of-k-sum-pairs', 'medium', 'two-pointer', { lcNumber: 1679, pattern: 'Two Pointers / Hash Map', tc: 'O(n)', sc: 'O(n)' }),
          p('String Compression', 'string-compression', 'medium', 'two-pointer', { lcNumber: 443, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Hash Map',
        slug: 'hashmap',
        problems: [
          p('Subarray Sum Equals K', 'subarray-sum-equals-k', 'medium', 'hashmap', { lcNumber: 560, pattern: 'Prefix Sum + Hash Map', tc: 'O(n)', sc: 'O(n)' }),
          p('Maximum Sum of Distinct Subarrays with Length K', 'maximum-sum-of-distinct-subarrays-with-length-k', 'medium', 'hashmap', { lcNumber: 2461, pattern: 'Sliding Window + Set', tc: 'O(n)', sc: 'O(k)' }),
          p('Shared Student Courses', 'shared-student-courses', 'medium', 'hashmap', { lcNumber: null, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(n)' }),
          p('Get Gross Profit', 'get-gross-profit', 'medium', 'hashmap', { lcNumber: null, pattern: 'Hash Map', tc: 'O(n)', sc: 'O(n)' }),
        ],
      },
      {
        name: 'Linked List',
        slug: 'linked-list',
        problems: [
          p('Add Two Numbers', 'add-two-numbers', 'medium', 'linked-list', { lcNumber: 2, pattern: 'Linked List / Math', tc: 'O(max(m,n))', sc: 'O(max(m,n))' }),
          p('Remove Nth Node From End of List', 'remove-nth-node-from-end-of-list', 'medium', 'linked-list', { lcNumber: 19, pattern: 'Two Pointers (Fast & Slow)', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Dynamic Programming',
        slug: 'dynamic-programming',
        problems: [
          p('House Robber', 'house-robber', 'medium', 'dynamic-programming', { lcNumber: 198, pattern: 'Dynamic Programming', tc: 'O(n)', sc: 'O(1)' }),
          p('Best Time to Buy and Sell Stock II', 'best-time-to-buy-and-sell-stock-two', 'medium', 'dynamic-programming', { lcNumber: 122, pattern: 'Greedy / DP', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Binary Search',
        slug: 'binary-search',
        problems: [
          p('Maximum Value at a Given Index in a Bounded Array', 'maximum-value-at-a-given-index-in-a-bounded-array', 'medium', 'binary-search', { lcNumber: 1802, pattern: 'Binary Search + Greedy', tc: 'O(log(maxSum))', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Sliding Window',
        slug: 'sliding-window',
        problems: [
          p('Longest Repeating Character Replacement', 'longest-repeating-character-replacement', 'medium', 'sliding-window', { lcNumber: 424, pattern: 'Sliding Window', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
    ],
  },
  {
    name: 'Hard',
    slug: 'hard',
    topics: [
      {
        name: 'Arrays',
        slug: 'arrays',
        problems: [
          p('Trapping Rain Water', 'trapping-rain-water', 'hard', 'arrays', { lcNumber: 42, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)', hasContent: true }),
          p('Candy', 'candy', 'hard', 'arrays', { lcNumber: 135, pattern: 'Greedy / Two Pass', tc: 'O(n)', sc: 'O(n)' }),
        ],
      },
      {
        name: 'Hash Map',
        slug: 'hashmap',
        problems: [
          p('Substring with Concatenation of All Words', 'substring-with-concatenation-of-all-words', 'hard', 'hashmap', { lcNumber: 30, pattern: 'Sliding Window + Hash Map', tc: 'O(n·w)', sc: 'O(w)' }),
        ],
      },
      {
        name: 'Linked Lists',
        slug: 'linked-lists',
        problems: [
          p('Reverse Nodes in k-Group', 'reverse-nodes-in-k-group', 'hard', 'linked-lists', { lcNumber: 25, pattern: 'Linked List / Recursion', tc: 'O(n)', sc: 'O(n/k)' }),
        ],
      },
    ],
  },
  {
    name: 'NeetCode Roadmap',
    slug: 'neetcode',
    topics: [
      {
        name: 'Arrays & Hashing',
        slug: 'arrays-hashing',
        problems: [
          p('Contains Duplicate', 'contains-duplicate', 'neetcode', 'arrays-hashing', { lcNumber: 217, pattern: 'Hash Set', tc: 'O(n)', sc: 'O(n)' }),
          p('Valid Anagram', 'valid-anagram', 'neetcode', 'arrays-hashing', { lcNumber: 242, pattern: 'Frequency Count', tc: 'O(n)', sc: 'O(1)' }),
          p('Group Anagrams', 'group-anagrams', 'neetcode', 'arrays-hashing', { lcNumber: 49, pattern: 'HashMap + Sorting', tc: 'O(n·k log k)', sc: 'O(nk)' }),
          p('Top K Frequent Elements', 'top-k-frequent', 'neetcode', 'arrays-hashing', { lcNumber: 347, pattern: 'Heap / Bucket Sort', tc: 'O(n log k)', sc: 'O(n)' }),
          p('Longest Consecutive Sequence', 'longest-consecutive-sequence', 'neetcode', 'arrays-hashing', { lcNumber: 128, pattern: 'Hash Set', tc: 'O(n)', sc: 'O(n)' }),
        ],
      },
      {
        name: 'Sliding Window',
        slug: 'sliding-window',
        problems: [
          p('Best Time to Buy and Sell Stock', 'buy-sell-stock', 'neetcode', 'sliding-window', { lcNumber: 121, pattern: 'Sliding Window / Greedy', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Two Pointers',
        slug: 'two-pointers',
        problems: [
          p('Valid Palindrome', 'valid-palindrome', 'neetcode', 'two-pointers', { lcNumber: 125, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
          p('Two Sum II', 'two-sumII', 'neetcode', 'two-pointers', { lcNumber: 167, pattern: 'Two Pointers', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Stacks',
        slug: 'stacks',
        problems: [
          p('Valid Parentheses', 'valid-parentheses', 'neetcode', 'stacks', { lcNumber: 20, pattern: 'Stack', tc: 'O(n)', sc: 'O(n)' }),
        ],
      },
    ],
  },
  {
    name: 'Article Practice',
    slug: 'article-practice',
    topics: [
      {
        name: 'Graphs',
        slug: 'graphs',
        problems: [
          p('BFS and DFS Practice', 'bfs-and-dfs-practice', 'article-practice', 'graphs', { lcNumber: null, pattern: 'BFS / DFS', tc: 'O(V+E)', sc: 'O(V)' }),
          p('BFS Practice One', 'bfs-practice-one', 'article-practice', 'graphs', { lcNumber: null, pattern: 'BFS', tc: 'O(V+E)', sc: 'O(V)' }),
        ],
      },
      {
        name: 'Linked Lists',
        slug: 'linkedLists',
        problems: [
          p('Linked List Practice One', 'linked-list-practice-one', 'article-practice', 'linkedLists', { lcNumber: null, pattern: 'Linked List', tc: 'O(n)', sc: 'O(1)' }),
        ],
      },
      {
        name: 'Trees',
        slug: 'tree',
        problems: [
          p('BFS Tree Traversal', 'bfs-tree-traversal', 'article-practice', 'tree', { lcNumber: null, pattern: 'BFS', tc: 'O(n)', sc: 'O(n)' }),
        ],
      },
    ],
  },
];

export function getProblemBySlug(
  difficulty: string,
  topic: string,
  slug: string
): Problem | undefined {
  const section = manifest.find((s) => s.slug === difficulty);
  const topicEntry = section?.topics.find((t) => t.slug === topic);
  return topicEntry?.problems.find((p) => p.slug === slug);
}

export function getAllProblemParams() {
  return manifest.flatMap((section) =>
    section.topics.flatMap((topic) =>
      topic.problems.map((problem) => ({
        difficulty: section.slug,
        topic: topic.slug,
        slug: problem.slug,
      }))
    )
  );
}
