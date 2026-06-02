// TODO: implement
// LC #148 — Sort List
//
// Given the head of a linked list, sort it in ASCENDING order. Constraint:
// O(n log n) time and (ideally) O(1) extra space (recursion stack OK).
//
// Example:
//   4 → 2 → 1 → 3        → 1 → 2 → 3 → 4
//   -1 → 5 → 3 → 4 → 0    → -1 → 0 → 3 → 4 → 5
//
// Approach (top-down merge sort, the classic):
//   sortList(head):
//     if head null or head.next null → head
//     mid = findMidAndSplit(head)   // returns the head of the 2nd half;
//                                     // also disconnects head's first half
//     left = sortList(head)
//     right = sortList(mid)
//     return merge(left, right)
//
//   findMidAndSplit(head):
//     slow/fast pointers; just before slow advances past mid, snip the
//     link so the two halves are separate lists.
//
//   merge(a, b):
//     standard sorted-list merge with a dummy head; O(m + n).
//
// Why merge sort:
//   It's natural for linked lists (no random access, no in-place swaps).
//   Quicksort on lists requires partitioning which is awkward and doesn't
//   beat merge sort's O(n log n) worst case.
//
// Bottom-up variant (true O(1) space):
//   Merge pairs of length 1, then length 2, then 4, ... in iterative
//   passes. More code but no recursion.
//
// Time:  O(n log n)
// Space: O(log n) recursion stack (top-down) or O(1) (bottom-up)
//
// Edge Cases:
//   - Empty list                    → null
//   - Single node                   → itself
//   - Already sorted                → still O(n log n), no shortcut

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const buildList = (arr) => {
  const d = new ListNode(); let c = d;
  for (const v of arr) { c.next = new ListNode(v); c = c.next; }
  return d.next;
};

const listToArray = (h) => {
  const o = []; while (h) { o.push(h.val); h = h.next; } return o;
};

/**
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
const sortList = (head) => {
  // your code here
};

console.log('=== LC #148 Sort List ===\n');

console.log('Test 1:');
console.log(listToArray(sortList(buildList([4, 2, 1, 3]))));
// Expected: [1,2,3,4]

console.log('\nTest 2:');
console.log(listToArray(sortList(buildList([-1, 5, 3, 4, 0]))));
// Expected: [-1,0,3,4,5]

console.log('\nTest 3 — empty:');
console.log(listToArray(sortList(null)));
// Expected: []

console.log('\nTest 4 — already sorted:');
console.log(listToArray(sortList(buildList([1, 2, 3]))));
// Expected: [1,2,3]
