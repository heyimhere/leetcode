// TODO: implement
// LC #876 — Middle of the Linked List
//
// Given the head of a singly linked list, return the MIDDLE node. If there
// are two middle nodes (even length), return the SECOND middle.
//
// Example:
//   1→2→3→4→5      → returns node with val 3
//   1→2→3→4→5→6    → returns node with val 4 (second middle)
//
// Approach (slow + fast pointer):
//   Initialize slow = fast = head.
//   While fast && fast.next:
//     slow = slow.next
//     fast = fast.next.next
//   Return slow.
//
// Why fast moves twice:
//   When fast reaches the end (or null past it), slow has moved exactly
//   half as many steps — landing on the middle. For even-length lists,
//   the algorithm naturally lands on the SECOND middle, which is what the
//   problem asks for.
//
// Alternative: two-pass (count, then walk n/2). Same big-O but two passes.
// Slow/fast is the classic interview answer.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Single node                → returns itself
//   - Two nodes                  → returns the second
//   - Empty list (null head)     → returns null

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const buildList = (arr) => {
  const dummy = new ListNode();
  let curr = dummy;
  for (const v of arr) { curr.next = new ListNode(v); curr = curr.next; }
  return dummy.next;
};

/**
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
const middleNode = (head) => {
  // your code here
};

console.log('=== LC #876 Middle of the Linked List ===\n');

console.log('Test 1 — odd length [1,2,3,4,5]:');
console.log(middleNode(buildList([1, 2, 3, 4, 5]))?.val);
// Expected: 3

console.log('\nTest 2 — even length [1,2,3,4,5,6]:');
console.log(middleNode(buildList([1, 2, 3, 4, 5, 6]))?.val);
// Expected: 4

console.log('\nTest 3 — single node:');
console.log(middleNode(buildList([7]))?.val);
// Expected: 7

console.log('\nTest 4 — empty:');
console.log(middleNode(null));
// Expected: null
