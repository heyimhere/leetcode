// TODO: implement
// LC #92 — Reverse Linked List II
//
// Given the head of a singly linked list and indices left and right (1-
// indexed, inclusive, with left ≤ right), reverse the sublist between
// positions left and right. Return the modified head.
//
// Example:
//   1→2→3→4→5,  left=2, right=4   → 1→4→3→2→5
//   5,          left=1, right=1   → 5
//
// Approach (in-place rewire in one pass):
//   Use a dummy node so left == 1 isn't a special case.
//   1. Walk `prev` to the node just BEFORE position left.
//   2. `curr` = prev.next. For (right - left) iterations:
//        Take curr.next (call it `next`).
//        Move `next` to the FRONT of the reversed segment by:
//          curr.next = next.next
//          next.next = prev.next
//          prev.next = next
//   3. Return dummy.next.
//
// Why this works (head-insertion trick):
//   Each step pulls the node after curr and re-inserts it at the front of
//   the segment (immediately after prev). After (right - left) such moves,
//   the segment is reversed. curr stays put — it sinks to the back.
//
// Alternative: reverse a detached segment with a 3-pointer reverse, then
// re-stitch. Same big-O but more bookkeeping.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - left === right         → no reversal (single node "segment")
//   - left === 1             → dummy makes this trivial
//   - right === n            → segment ends at the tail
//   - Whole list reversed (1, n)

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
 * @param {number} left
 * @param {number} right
 * @returns {ListNode | null}
 */
const reverseBetween = (head, left, right) => {
  // your code here
};

console.log('=== LC #92 Reverse Linked List II ===\n');

console.log('Test 1:');
console.log(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 2, 4)));
// Expected: [1,4,3,2,5]

console.log('\nTest 2 — singleton:');
console.log(listToArray(reverseBetween(buildList([5]), 1, 1)));
// Expected: [5]

console.log('\nTest 3 — full reverse:');
console.log(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 5)));
// Expected: [5,4,3,2,1]

console.log('\nTest 4 — no-op:');
console.log(listToArray(reverseBetween(buildList([1, 2, 3]), 2, 2)));
// Expected: [1,2,3]
