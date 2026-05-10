# Study Guide — Interview Pattern Practice

The goal isn't to memorize solutions — it's to internalize ~9 move archetypes so well that within the first 60 seconds of reading a new problem, you know which template applies. Every problem here already exists in this repo. Use this doc as a navigation layer: pick a pattern, pick a problem, close your editor, open a blank file, and cold-type the solution from memory. Then run it. Then compare.

---

## How to Use This Doc

**Each session (45–60 min):**
1. Pick 1 problem from each of 3 different pattern categories
2. Open a blank `.js` file, write the solution from memory — no hints
3. Run it: `node <your-file>.js` — don't look at the original until it passes
4. Open the reference file and compare: variable names, edge cases, structure

**Weekly rotation:**

| Day | Focus |
|-----|-------|
| Mon / Wed / Fri | HashMap + Two Pointers + one of (Linked Lists / Trees) |
| Tue / Thu | Sliding Window + DP + Greedy |
| Weekend | 1 Hard problem, timed at 25 min |

---

## Pattern 1: Hash Map / Frequency Count

```javascript
const map = new Map();
for (const x of arr) {
  map.set(x, (map.get(x) || 0) + 1);
  // OR: check complement before storing
  if (map.has(target - x)) return [map.get(target - x), i];
  map.set(x, i);
}
```

### LC #1 — Two Sum `E`
**File:** `easy/arrays/two-sum.js`
**Pattern key:** Store index in Map; check for `target - num` before inserting.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~4 min

### LC #217 — Contains Duplicate `E`
**File:** `easy/hashmaps/contains-duplicate.js`
**Pattern key:** Add to Set; if `set.has(n)` before adding, return true.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~3 min

### LC #242 — Valid Anagram `E`
**File:** `easy/hashmaps/valid-anagram.js`
**Pattern key:** Count chars in s1 with Map; decrement for s2; all values must be 0.
**Big-O:** Time O(n) | Space O(1) — at most 26 keys
**Rederive in:** ~5 min

### LC #49 — Group Anagrams `M`
**File:** `medium/arrays/group-anagrams.js`
**Pattern key:** Sort each word → use as Map key; group words sharing the same key.
**Big-O:** Time O(n · k log k) | Space O(n)
**Rederive in:** ~8 min

### LC #347 — Top K Frequent Elements `M`
**File:** `medium/arrays/top-k-frequent-elements.js`
**Pattern key:** Frequency Map → sort entries by count → return top k keys.
**Big-O:** Time O(n log n) | Space O(n)
**Rederive in:** ~10 min

### LC #128 — Longest Consecutive Sequence `M`
**File:** `neetcode/roadmap/arrays-hashing/longest-consecutive-sequence.js`
**Pattern key:** Put all nums in a Set; only start counting from sequence starts (`!set.has(n-1)`).
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~12 min

### LC #560 — Subarray Sum Equals K `M`
**File:** `medium/hashmap/subarray-sum-equals-k.js`
**Pattern key:** Running prefix sum; check if `(sum - k)` is in Map. Seed map with `{0: 1}`.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~12 min

---

## Pattern 2: Two Pointers

```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
  if (/* condition */) left++;
  else right--;
}
```

### LC #125 — Valid Palindrome `E`
**File:** `easy/strings/valid-palindrome.js`
**Pattern key:** Skip non-alphanumeric from both ends; compare lowercased chars.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~6 min

### LC #167 — Two Sum II `M`
**File:** `medium/two-pointer/two-sum-two-input-array-is-sorted.js`
**Pattern key:** Sorted input — if sum < target move left right; if sum > target move right left.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~5 min

### LC #15 — 3Sum `M`
**File:** `medium/arrays/3sum.js`
**Pattern key:** Sort, fix i, two-pointer on i+1…end. Skip duplicates at all three levels.
**Big-O:** Time O(n²) | Space O(1) output aside
**Rederive in:** ~15 min

### LC #11 — Container With Most Water `M`
**File:** `medium/arrays/container-with-most-water.js`
**Pattern key:** Move the shorter wall inward. Area = min(h[l], h[r]) × (r - l).
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~8 min

### LC #42 — Trapping Rain Water `H`
**File:** `hard/arrays/trapping-rain-water.js`
**Pattern key:** Track maxLeft and maxRight; water at i = min(maxL, maxR) - height[i]. Move the shorter side.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~20 min

---

## Pattern 3: Sliding Window

```javascript
let left = 0;
for (let right = 0; right < s.length; right++) {
  // expand: process s[right]
  while (/* window invalid */) {
    // shrink: undo s[left], left++
  }
  // update best: right - left + 1
}
```

### LC #121 — Best Time to Buy & Sell Stock `E`
**File:** `neetcode/roadmap/sliding-window/buy-sell-stock.js`
**Pattern key:** Track minPrice seen so far; update maxProfit = price - minPrice each step.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~5 min

### LC #3 — Longest Substring Without Repeating Chars `M`
**File:** `medium/arrays/longest-substring-without-repeating-characters.js`
**Pattern key:** Map char → last seen index. When duplicate found, move left to max(left, lastSeen + 1).
**Big-O:** Time O(n) | Space O(min(n, 128))
**Rederive in:** ~10 min

### LC #209 — Minimum Size Subarray Sum `M`
**File:** `medium/arrays/minimum-size-subarray-sum.js`
**Pattern key:** Expand right adding to sum; while sum >= target shrink left and update min length.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~10 min

---

## Pattern 4: Stack

```javascript
const stack = [];
for (const c of s) {
  if (/* opening */) stack.push(c);
  else if (stack.pop() !== match[c]) return false;
}
return stack.length === 0;
```

### LC #20 — Valid Parentheses `E`
**File:** `easy/strings/valid-parentheses.js`
**Pattern key:** Push opens; on close, pop and verify match. Empty stack = valid.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~5 min

### LC #150 — Evaluate Reverse Polish Notation `M`
**File:** `medium/arrays/evaluate-reverse-polish-notation.js`
**Pattern key:** Push numbers; on operator pop two, compute, push result.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~10 min

### LC #155 — Min Stack `M`
**File:** `medium/arrays/min-stack.js`
**Pattern key:** Maintain a parallel minStack; push current min alongside each value.
**Big-O:** Time O(1) all ops | Space O(n)
**Rederive in:** ~10 min

---

## Pattern 5: Linked Lists

```javascript
// Three-pointer reversal
let prev = null, curr = head;
while (curr) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
return prev;

// Fast/slow cycle detection
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true;
}
```

### LC #206 — Reverse Linked List `E`
**File:** `easy/linked-lists/reverse-linked-list.js`
**Pattern key:** Three-pointer iterative reversal (prev / curr / next). Also know the recursive form.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~5 min

### LC #141 — Linked List Cycle `E`
**File:** `easy/linked-lists/linked-list-cycle.js`
**Pattern key:** Fast (2x) and slow (1x) pointers — they meet if cycle exists.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~5 min

### LC #21 — Merge Two Sorted Lists `E`
**File:** `easy/arrays/merge-two-sorted-lists.js`
**Pattern key:** Dummy head node; compare l1/l2 values, attach smaller, advance that pointer.
**Big-O:** Time O(n + m) | Space O(1)
**Rederive in:** ~8 min

### LC #19 — Remove Nth Node From End `M`
**File:** `medium/linked-list/remove-nth-node-from-end-of-list.js`
**Pattern key:** Advance fast n steps, then move both until fast.next is null. Remove slow.next.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~10 min

### LC #2 — Add Two Numbers `M`
**File:** `medium/linked-list/add-two-numbers.js`
**Pattern key:** Traverse both lists simultaneously, track carry. Create new node each step.
**Big-O:** Time O(max(n, m)) | Space O(max(n, m))
**Rederive in:** ~12 min

### LC #25 — Reverse Nodes in K-Group `H`
**File:** `hard/linked-lists/reverse-nodes-in-k-group.js`
**Pattern key:** Check k nodes exist; reverse chunk in-place; recurse on remainder.
**Big-O:** Time O(n) | Space O(n/k) call stack
**Rederive in:** ~25 min

---

## Pattern 6: Trees — DFS + BFS

```javascript
// DFS (recursive)
const dfs = (node) => {
  if (!node) return base;
  return combine(dfs(node.left), dfs(node.right));
};

// BFS (level-order)
const queue = [root];
while (queue.length) {
  const size = queue.length;
  for (let i = 0; i < size; i++) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```

### LC #104 — Maximum Depth of Binary Tree `E`
**File:** `easy/tree/maximum-depth-of-binary-tree.js`
**Pattern key:** `return 1 + Math.max(dfs(left), dfs(right))`. Base: null → 0.
**Big-O:** Time O(n) | Space O(h)
**Rederive in:** ~4 min

### LC #226 — Invert Binary Tree `E`
**File:** `easy/tree/invert-binary-tree.js`
**Pattern key:** Swap left/right, then recurse both. Base: null → return null.
**Big-O:** Time O(n) | Space O(h)
**Rederive in:** ~4 min

### LC #100 — Same Tree `E`
**File:** `easy/tree/same-tree.js`
**Pattern key:** 3 base cases: both null → true; one null → false; values differ → false. Then recurse.
**Big-O:** Time O(n) | Space O(h)
**Rederive in:** ~5 min

### LC #234 — Palindrome Linked List `E`
**File:** `easy/arrays/palindrome-linked-list.js`
**Pattern key:** Fast/slow to find mid; reverse second half; compare front and back halves.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~12 min

### LC #88 — Merge Sorted Array `E`
**File:** `easy/arrays/merge-sorted-array.js`
**Pattern key:** Three pointers starting from the end (avoid overwriting). Place largest last.
**Big-O:** Time O(n + m) | Space O(1)
**Rederive in:** ~8 min

---

## Pattern 7: Dynamic Programming — 1D

```javascript
// Tabulation template
const dp = new Array(n + 1).fill(0);
dp[0] = base0; dp[1] = base1;
for (let i = 2; i <= n; i++) {
  dp[i] = /* transition: f(dp[i-1], dp[i-2], ...) */;
}
return dp[n];
```

### LC #70 — Climbing Stairs `E`
**File:** `easy/dynamic-programming/climbling-stairs.js`
**Pattern key:** `dp[i] = dp[i-1] + dp[i-2]`. Fibonacci shape. Know both tabulation and memoization.
**Big-O:** Time O(n) | Space O(n) tabulation, O(1) space-optimized
**Rederive in:** ~6 min

### LC #198 — House Robber `M`
**File:** `medium/dynamic-programming/house-robber.js`
**Pattern key:** `dp[i] = max(dp[i-1], nums[i] + dp[i-2])`. Rob this house + 2-back, or skip.
**Big-O:** Time O(n) | Space O(1) space-optimized
**Rederive in:** ~10 min

### LC #322 — Coin Change `M`
**File:** `medium/arrays/coin-change.js`
**Pattern key:** Fill dp with Infinity, dp[0] = 0. `dp[i] = min(dp[i], 1 + dp[i - coin])` for each coin.
**Big-O:** Time O(n × coins) | Space O(n)
**Rederive in:** ~12 min

### LC #122 — Best Time to Buy & Sell Stock II `M`
**File:** `medium/dynamic-programming/best-time-to-buy-and-sell-stock-two.js`
**Pattern key:** Sum all positive day-over-day differences (greedy — grab every upswing).
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~5 min

---

## Pattern 8: Greedy / Array Traversal

```javascript
// Running decision variable pattern
let decision = initialValue;
for (const x of arr) {
  decision = update(decision, x);
  if (/* early exit condition */) return result;
}
```

### LC #169 — Majority Element `E`
**File:** `easy/arrays/majority-element.js`
**Pattern key:** Boyer-Moore vote: increment count on match, decrement on mismatch; reset candidate when count hits 0.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~8 min

### LC #238 — Product of Array Except Self `M`
**File:** `medium/arrays/product-of-array-except-self.js`
**Pattern key:** Left-pass prefix products into output; right-pass multiplies in suffix products. No division.
**Big-O:** Time O(n) | Space O(1) output aside
**Rederive in:** ~12 min

### LC #55 — Jump Game `M`
**File:** `medium/arrays/jump-game.js`
**Pattern key:** Track `maxReach`. If `i > maxReach`, return false. Update `maxReach = max(maxReach, i + nums[i])`.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~8 min

### LC #45 — Jump Game II `M`
**File:** `medium/arrays/jump-game-two.js`
**Pattern key:** BFS-style: track current boundary and next boundary. Increment jumps when you cross current boundary.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~12 min

### LC #134 — Gas Station `M`
**File:** `medium/arrays/gas-station.js`
**Pattern key:** If total gas >= total cost a solution exists. Track running tank; when it goes negative, reset start to i+1.
**Big-O:** Time O(n) | Space O(1)
**Rederive in:** ~12 min

### LC #135 — Candy `H`
**File:** `hard/arrays/candy.js`
**Pattern key:** Two passes: left-to-right (satisfy increasing right), right-to-left (satisfy increasing left). Take max at each position.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~20 min

---

## Pattern 9: Prefix Sum

```javascript
const prefix = [0];
for (const n of nums) prefix.push(prefix.at(-1) + n);
// range sum [i, j] = prefix[j+1] - prefix[i]
```

### LC #560 — Subarray Sum Equals K `M`
**File:** `medium/hashmap/subarray-sum-equals-k.js`
**Pattern key:** Running sum + Map. If `(sum - k)` exists in Map, those subarrays are valid. Seed `{0: 1}`.
**Big-O:** Time O(n) | Space O(n)
**Rederive in:** ~12 min

### LC #54 — Spiral Matrix `M`
**File:** `medium/arrays/spiral-matrix.js`
**Pattern key:** Four shrinking boundaries (top/bottom/left/right). Go right → down → left → up, shrink after each pass.
**Big-O:** Time O(m × n) | Space O(1) output aside
**Rederive in:** ~15 min

---

## What to Add Next

These patterns have zero or near-zero coverage in the repo. Add ~2 problems each to build them out.

1. **Monotonic Stack** — Start with: Daily Temperatures (#739), Next Greater Element I (#496)
2. **Binary Search** — Start with: Binary Search (#704), Search a 2D Matrix (#74)
3. **Backtracking** — Start with: Subsets (#78), Permutations (#46)
4. **Intervals** — Start with: Merge Intervals (#56), Insert Interval (#57)
5. **Graphs (real LC problems)** — Start with: Number of Islands (#200), Clone Graph (#133)
6. **Heap / Priority Queue** — Start with: Kth Largest Element in Array (#215), Task Scheduler (#621)
7. **Trie** — Start with: Implement Trie (#208)
