# LeetCode Practice Recap

## Sliding Window

### 1. Maximum Sum Subarray of Size K (Easy)

```javascript
const maxSubarraySum = (arr, k) => {
  // Fixed window, track sum, slide by adding right and removing left
};
```

### 2. Has Unique Substring of Size K (Easy)

```javascript
const hasUniqueSubstring = (str, k) => {
  // Fixed window, use Map to track char counts, check if map.size === k
};
```

### 3. Minimum Window Substring (Medium) — LC #76

```javascript
const minWindow = (str1, str2) => {
  // Variable window, expand right until valid, shrink left to minimize
  // Track "need" map and "have" count
};
```

---

## Two Pointers

### 1. Two Sum II - Sorted Array (Easy) — LC #167

```javascript
const twoSum = (numbers, target) => {
  // Left and right pointers, move based on sum vs target
};
```

### 2. Valid Palindrome II (Easy) — LC #680

```javascript
const validPalindrome = (str) => {
  // Two pointers, on mismatch try skipping left OR right
  // Helper function to check if substring is palindrome
};
```

### 3. Container With Most Water (Medium) — LC #11

```javascript
const maxArea = (arr) => {
  // Left and right pointers, calculate area, move shorter wall inward
  // Area = min(height[left], height[right]) × (right - left)
};
```

---

## HashMap

### 1. Two Sum (Easy) — LC #1

```javascript
const twoSum = (arr, target) => {
  // Store seen numbers in Map, check for complement (target - num)
};
```

### 2. Valid Anagram (Easy) — LC #242

```javascript
const isAnagram = (str1, str2) => {
  // Count chars in first string, decrement for second, check all zero
};
```

### 3. Group Anagrams (Medium) — LC #49

```javascript
const groupAnagrams = (arr) => {
  // Sort each word as key, group words with same sorted key
};
```

---

## Stack

### 1. Valid Parentheses (Easy) — LC #20

```javascript
const isValid = (str) => {
  // Push opening brackets, pop and match for closing brackets
  // Check stack is empty at end
};
```

---

## Dynamic Programming

### 1. Climbing Stairs (Easy) — LC #70

**Tabulation:**

```javascript
const climbStairs = (num) => {
  // dp[i] = dp[i-1] + dp[i-2]
  // Base: dp[1] = 1, dp[2] = 2
};
```

**Memoization:**

```javascript
const climbStairs = (num, memo = {}) => {
  // Recurse: climbStairs(n-1) + climbStairs(n-2)
  // Cache results in memo
};
```

### 2. House Robber (Easy) — LC #198

**Tabulation:**

```javascript
const rob = (arr) => {
  // dp[i] = max(arr[i] + dp[i-2], dp[i-1])
  // Rob this house + best from 2 back, OR skip and take previous best
};
```

**Memoization:**

```javascript
const rob = (arr, i = arr.length - 1, memo = {}) => {
  // Recurse from end, choose rob or skip
};
```

### 3. Coin Change (Medium) — LC #322

```javascript
const coinChange = (coins, target) => {
  // dp[amount] = min(dp[amount], 1 + dp[amount - coin])
  // Fill with Infinity, dp[0] = 0
  // Return -1 if impossible
};
```

---

## Recursion

### 1. Find Max in Array

```javascript
const findMax = (arr) => {
  // Base: arr.length === 1, return arr[0]
  // Recurse: compare arr[0] with findMax(arr.slice(1))
};
```

### 2. Sum Array

```javascript
const sumArray = (arr, index = 0) => {
  // Base: index >= arr.length, return 0
  // Recurse: arr[index] + sumArray(arr, index + 1)
};
```

### 3. Factorial

```javascript
const factorial = (n) => {
  // Base: n <= 1, return 1
  // Recurse: n * factorial(n - 1)
};
```

### 4. Fibonacci with Memoization

```javascript
const fib = (n, memo = []) => {
  // Base: n <= 0 return 0, n === 1 return 1
  // Check memo, store result: fib(n-1) + fib(n-2)
};
```

### 5. Flatten Array

```javascript
const flatArray = (arr, n) => {
  // Loop through all elements
  // If array AND depth > 0, recurse with depth - 1
  // Else push to result
};
```

---

## Flatten / Unflatten Objects

### Flatten Nested Object

```javascript
const flattenObject = (obj, prefix = "", result = {}) => {
  // Loop through keys
  // If value is object (not null, not array), recurse with prefix
  // Else store with dot notation key
};
```

**Example:**

```javascript
// Input
{ name: "John", address: { city: "Austin", zip: { code: "78701" } } }

// Output
{ "name": "John", "address.city": "Austin", "address.zip.code": "78701" }
```

### Unflatten Object

```javascript
const unflattenObject = (obj) => {
  // Loop through keys
  // Split key by "."
  // Walk through nested structure, create objects as needed
  // Assign value at final key
};
```

**Example:**

```javascript
// Input
{ "name": "John", "address.city": "Austin", "address.zip.code": "78701" }

// Output
{ name: "John", address: { city: "Austin", zip: { code: "78701" } } }
```

---

## Real-World Problem

### Healthcare Claims Validator

```javascript
const validator = (claims, patients, rules) => {
  // Build patient hashmap (id → patient)
  // Build rules hashmap (procedureCode → rule)
  // Loop claims, validate age range and place of service
  // Return sorted valid claim IDs
};
```

---

## Arrays / 2D Arrays

### 1. Merge Sorted Arrays (Easy)

```javascript
const mergeSortedArrays = (nums1, nums2) => {
  // Two pointers, compare and push smaller, handle remaining
};
```

### 2. Matrix Row Sum (Easy)

```javascript
const rowSums = (arr) => {
  // Nested loop, sum each row
};
```

### 3. Rotate Matrix 90° (Medium) — LC #48

```javascript
const rotate = (arr) => {
  // Step 1: Transpose (swap arr[i][j] with arr[j][i], j = i + 1)
  // Step 2: Reverse each row
};
```

### 4. Spiral Matrix (Medium) — LC #54

```javascript
const spiralOrder = (matrix) => {
  // Four boundaries: top, bottom, left, right
  // Go right, down, left, up, shrink boundaries, repeat
};
```

---

## Other Problems

### Valid Palindrome — LC #125

```javascript
const isPalindrome = (s) => {
  // Two pointers, skip non-alphanumeric, compare case-insensitive
  // Helper: isAlphanumeric using charCodeAt (48-57, 65-90, 97-122)
};
```

### Common Courses Count (Karat-style)

```javascript
const findCommonCourses = (enrollments) => {
  // Build map: student → Set of courses
  // Nested loop for pairs (j = i + 1)
  // Count intersection of course sets
};
```
# Linked List Practice

## Node Structure
```javascript
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
```

---

## 1. Reverse Linked List (Easy) — LC #206

```javascript
const reverseList = (head) => {
  // Three pointers: prev, current, next
  // Walk through list, reverse each pointer
  // prev starts as null (new tail)
  // Return prev (new head)
};
```

**Visual:**
```
Original: 1 → 2 → 3 → null
Reversed: null ← 1 ← 2 ← 3

Step by step:
null ← 1    2 → 3 → null
null ← 1 ← 2    3 → null
null ← 1 ← 2 ← 3
```

---

## 2. Merge Two Sorted Lists (Easy) — LC #21

```javascript
const mergeTwoLists = (list1, list2) => {
  // Create dummy node to simplify edge cases
  // Compare values, attach smaller node
  // Move pointer forward on the list we took from
  // Attach remaining nodes at end
  // Return dummy.next
};
```

**Visual:**
```
List1: 1 → 2 → 4
List2: 1 → 3 → 4

Compare 1 vs 1: attach 1, move list1
Compare 2 vs 1: attach 1, move list2
Compare 2 vs 3: attach 2, move list1
Compare 4 vs 3: attach 3, move list2
Compare 4 vs 4: attach 4, move list1
Remaining: attach 4

Result: 1 → 1 → 2 → 3 → 4 → 4
```

---

## 3. Remove Nth Node From End (Medium) — LC #19

```javascript
const removeNthFromEnd = (head, n) => {
  // Two pointers: fast and slow
  // Move fast n steps ahead
  // Move both until fast reaches end
  // slow.next is the node to remove
  // Use dummy node to handle removing head
};
```

**Visual:**
```
1 → 2 → 3 → 4 → 5, n=2

Start:
dummy → 1 → 2 → 3 → 4 → 5 → null
  ↑
fast/slow

Move fast n steps:
dummy → 1 → 2 → 3 → 4 → 5 → null
  ↑           ↑
 slow        fast

Move both until fast.next is null:
dummy → 1 → 2 → 3 → 4 → 5 → null
              ↑           ↑
             slow        fast

Remove slow.next (node 4):
slow.next = slow.next.next

Result: 1 → 2 → 3 → 5
```

---

## Common Patterns

### Dummy Node
```javascript
const dummy = new ListNode(0);
dummy.next = head;
// ... work with list ...
return dummy.next;
```
Simplifies edge cases when head might be removed.

### Two Pointers (Fast/Slow)
- **Find middle:** fast moves 2x, slow moves 1x
- **Find nth from end:** fast leads by n
- **Detect cycle:** if fast meets slow, cycle exists

### Reversing Pattern
```javascript
let prev = null;
let current = head;
while (current) {
  let next = current.next;  // Save next
  current.next = prev;      // Reverse pointer
  prev = current;           // Move prev forward
  current = next;           // Move current forward
}
return prev;  // New head
```
# Trees & Graphs Practice

## Tree Node Structure

```javascript
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

## Helper: Build Tree from Array

```javascript
const buildTree = (arr) => {
  if (!arr.length) return null;
  
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  
  while (i < arr.length) {
    const node = queue.shift();
    
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  
  return root;
};
```

---

## Core Concepts

### DFS (Depth-First Search)
Go as deep as possible, then backtrack. Uses recursion or stack.

```
    1
   / \
  2   3
 / \
4   5

DFS order: 1 → 2 → 4 → 5 → 3 (go deep first)
```

### BFS (Breadth-First Search)
Visit level by level. Uses queue.

```
    1
   / \
  2   3
 / \
4   5

BFS order: 1 → 2 → 3 → 4 → 5 (level by level)
```

### Three DFS Traversal Orders

```
       1
      / \
     2   3

Preorder:  Node → Left → Right  →  1, 2, 3
Inorder:   Left → Node → Right  →  2, 1, 3
Postorder: Left → Right → Node  →  2, 3, 1
```

---

# Phase 1: Binary Trees Basics

## 1. Maximum Depth of Binary Tree (Easy) — LC #104

```javascript
const maxDepth = (root) => {
  // Base case: null node has depth 0
  // Recursive: 1 + max(left depth, right depth)
};
```

**Visual:**
```
    3
   / \
  9  20
    /  \
   15   7

Depth = 3
```

---

## 2. Invert Binary Tree (Easy) — LC #226

```javascript
const invertTree = (root) => {
  // Base case: null node, return null
  // Swap left and right children
  // Recursively invert left and right subtrees
};
```

**Visual:**
```
Before:       After:
    4            4
   / \          / \
  2   7   →    7   2
 / \ / \      / \ / \
1  3 6  9    9  6 3  1
```

---

## 3. Same Tree (Easy) — LC #100

```javascript
const isSameTree = (p, q) => {
  // Base case: both null → true
  // Base case: one null, other not → false
  // Check: values equal AND left subtrees same AND right subtrees same
};
```

**Visual:**
```
Tree 1:    Tree 2:
  1          1
 / \        / \
2   3      2   3

Same? true
```

---

# Phase 2: Binary Tree Traversals

## 1. Binary Tree Inorder Traversal (Easy) — LC #94

```javascript
const inorderTraversal = (root) => {
  // Left → Node → Right
  // Use recursion or iterative with stack
};
```

**Visual:**
```
    1
     \
      2
     /
    3

Inorder: [1, 3, 2]
```

---

## 2. Binary Tree Level Order Traversal (Medium) — LC #102

```javascript
const levelOrder = (root) => {
  // BFS using queue
  // Track each level separately
  // Return array of arrays
};
```

**Visual:**
```
    3
   / \
  9  20
    /  \
   15   7

Output: [[3], [9, 20], [15, 7]]
```

---

## 3. Binary Tree Right Side View (Medium) — LC #199

```javascript
const rightSideView = (root) => {
  // BFS level by level
  // Take last node of each level
  // OR DFS going right first
};
```

**Visual:**
```
    1         <-- 1
   / \
  2   3       <-- 3
   \   \
    5   4     <-- 4

Output: [1, 3, 4]
```

---

# Phase 3: Binary Search Trees (BST)

## BST Property
- Left subtree values < node value
- Right subtree values > node value

```
      8
     / \
    3   10
   / \    \
  1   6    14

Valid BST: all left children < parent < all right children
```

---

## 1. Search in a BST (Easy) — LC #700

```javascript
const searchBST = (root, val) => {
  // Base case: null or found
  // If val < root.val, search left
  // If val > root.val, search right
};
```

---

## 2. Validate BST (Medium) — LC #98

```javascript
const isValidBST = (root, min = -Infinity, max = Infinity) => {
  // Base case: null is valid
  // Check: min < node.val < max
  // Left subtree: max becomes node.val
  // Right subtree: min becomes node.val
};
```

**Visual:**
```
Valid:          Invalid:
    5               5
   / \             / \
  3   7           3   7
 / \             / \
1   4           1   6  ← 6 > 5, invalid!
```

---

## 3. Lowest Common Ancestor of BST (Medium) — LC #235

```javascript
const lowestCommonAncestor = (root, p, q) => {
  // If both p and q < root, LCA is in left subtree
  // If both p and q > root, LCA is in right subtree
  // Otherwise, root is the LCA (split point)
};
```

**Visual:**
```
        6
       / \
      2   8
     / \ / \
    0  4 7  9
      / \
     3   5

LCA(2, 8) = 6
LCA(2, 4) = 2
LCA(3, 5) = 4
```

---

# Phase 4: Graphs

## Graph Representation

```javascript
// Adjacency List (most common)
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C']
};

// Grid (2D array)
const grid = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];
```

---

## 1. Number of Islands (Medium) — LC #200

```javascript
const numIslands = (grid) => {
  // Loop through grid
  // When you find '1', increment count and DFS/BFS to mark connected land
  // Mark visited cells as '0' to avoid revisiting
};
```

**Visual:**
```
Grid:
1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1

Islands: 3
```

---

## 2. Clone Graph (Medium) — LC #133

```javascript
const cloneGraph = (node) => {
  // Use hashmap to track cloned nodes
  // DFS/BFS through original graph
  // For each node, create clone and connect neighbors
};
```

**Node Structure:**
```javascript
class GraphNode {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
```

---

## 3. Course Schedule (Medium) — LC #207

```javascript
const canFinish = (numCourses, prerequisites) => {
  // Build adjacency list from prerequisites
  // Detect cycle using DFS
  // If cycle exists, can't finish all courses
  // Track: visiting (in current path) vs visited (fully processed)
};
```

**Visual:**
```
Input: numCourses = 4, prerequisites = [[1,0], [2,1], [3,2]]

Graph:
0 → 1 → 2 → 3

Can finish: true (no cycle)

Input: prerequisites = [[1,0], [0,1]]

Graph:
0 ↔ 1 (cycle!)

Can finish: false
```

---

# Common Patterns

## DFS Template (Recursive)

```javascript
const dfs = (node) => {
  if (!node) return;
  
  // Process node
  console.log(node.val);
  
  // Recurse
  dfs(node.left);
  dfs(node.right);
};
```

## DFS Template (Iterative with Stack)

```javascript
const dfs = (root) => {
  if (!root) return [];
  
  const stack = [root];
  const result = [];
  
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  return result;
};
```

## BFS Template (Queue)

```javascript
const bfs = (root) => {
  if (!root) return [];
  
  const queue = [root];
  const result = [];
  
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return result;
};
```

## BFS Level by Level

```javascript
const bfsLevels = (root) => {
  if (!root) return [];
  
  const queue = [root];
  const result = [];
  
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(level);
  }
  
  return result;
};
```

## Grid DFS (4 directions)

```javascript
const dfsGrid = (grid, row, col) => {
  // Boundary check
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return;
  }
  
  // Check if valid cell
  if (grid[row][col] !== '1') return;
  
  // Mark visited
  grid[row][col] = '0';
  
  // Visit all 4 directions
  dfsGrid(grid, row + 1, col);  // down
  dfsGrid(grid, row - 1, col);  // up
  dfsGrid(grid, row, col + 1);  // right
  dfsGrid(grid, row, col - 1);  // left
};
```
