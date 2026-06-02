// TODO: implement
// LC #138 — Copy List with Random Pointer
//
// Given a linked list where each node has a `next` and an extra `random`
// pointer (to any other node or null), construct a DEEP COPY of the list.
//
// Example:
//   Original: 7 → 13 → 11 → 10 → 1
//             random pointers go to arbitrary nodes (or null)
//   → A brand-new chain of 5 nodes with the SAME next-structure and the
//     same random-target relationships pointing into the NEW nodes.
//
// Approach 1 (HashMap of old → new, two passes):
//   Pass 1: walk original, create `new Node(val)` for each, store mapping.
//   Pass 2: walk original again, set new.next = map[old.next] and
//           new.random = map[old.random].
//   Return map[head].
//   Time: O(n), Space: O(n) for the map.
//
// Approach 2 (interleave + un-weave — O(1) extra):
//   1. After each original node X, insert a clone X' so the list looks
//      X1 → X1' → X2 → X2' → ... — links via next.
//   2. For each X, set X'.random = X.random.next (the clone of X.random).
//   3. Un-weave: separate the interleaved list into original and copy.
//   No HashMap; O(n) time, O(1) extra.
//
// Why a map is needed (Approach 1):
//   `random` can point to a node not yet cloned at the time we encounter
//   it. The map gives us O(1) "what's the clone of X" lookup once all
//   clones exist.
//
// Time:  O(n)
// Space: O(n) Approach 1; O(1) Approach 2
//
// Edge Cases:
//   - Empty list         → null
//   - random === null    → handle gracefully
//   - random points to self → cloned correctly via map / interleave

class _Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

/**
 * @param {_Node | null} head
 * @returns {_Node | null}
 */
const copyRandomList = (head) => {
  // your code here
};

console.log('=== LC #138 Copy List with Random Pointer ===\n');

// Build: 7 → 13 → 11 → 10 → 1
const n1 = new _Node(7);
const n2 = new _Node(13); n1.next = n2;
const n3 = new _Node(11); n2.next = n3;
const n4 = new _Node(10); n3.next = n4;
const n5 = new _Node(1);  n4.next = n5;
// Random pointers: 7→null, 13→7, 11→1, 10→11, 1→7
n1.random = null;
n2.random = n1;
n3.random = n5;
n4.random = n3;
n5.random = n1;

const cloned = copyRandomList(n1);
console.log('Test 1 (vals):');
let cur = cloned;
while (cur) {
  console.log(`val=${cur.val}, random=${cur.random ? cur.random.val : null}`);
  cur = cur.next;
}
// Expected: matches original val/random pattern with brand-new nodes
