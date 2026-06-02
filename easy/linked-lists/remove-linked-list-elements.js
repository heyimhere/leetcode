// TODO: implement
// LC #203 — Remove Linked List Elements
//
// Given the head of a linked list and an integer val, remove ALL nodes that
// have Node.val === val and return the new head.
//
// Example:
//   head = [1,2,6,3,4,5,6], val = 6  → [1,2,3,4,5]
//   head = [], val = 1               → []
//   head = [7,7,7,7], val = 7        → []
//
// Approach (dummy-head + single pass):
//   1. Create dummy with dummy.next = head. This avoids special-casing
//      removal of the original head.
//   2. Walk with `prev` from dummy. For each `curr = prev.next`:
//        if curr.val === val → prev.next = curr.next  (skip curr)
//        else                → prev = curr
//   3. Return dummy.next.
//
// Why dummy:
//   Without it, removing the head requires "if head.val === val, head =
//   head.next" looping logic. Dummy unifies head and non-head removal.
//
// Alternative: recursion.
//   removeElements(head, val):
//     if head is null → null
//     head.next = removeElements(head.next, val)
//     return head.val === val ? head.next : head
//   Clean but uses O(n) stack space.
//
// Time:  O(n)
// Space: O(1) iterative; O(n) recursive
//
// Edge Cases:
//   - Empty list                    → null
//   - All nodes match val           → null
//   - Head matches val              → dummy skips it cleanly
//   - val not present               → list returned unchanged

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

const listToArray = (head) => {
  const out = [];
  while (head) { out.push(head.val); head = head.next; }
  return out;
};

/**
 * @param {ListNode | null} head
 * @param {number} val
 * @returns {ListNode | null}
 */
const removeElements = (head, val) => {
  // your code here
};

console.log('=== LC #203 Remove Linked List Elements ===\n');

console.log('Test 1:');
console.log(listToArray(removeElements(buildList([1, 2, 6, 3, 4, 5, 6]), 6)));
// Expected: [1,2,3,4,5]

console.log('\nTest 2 — empty:');
console.log(listToArray(removeElements(null, 1)));
// Expected: []

console.log('\nTest 3 — all match:');
console.log(listToArray(removeElements(buildList([7, 7, 7, 7]), 7)));
// Expected: []

console.log('\nTest 4 — none match:');
console.log(listToArray(removeElements(buildList([1, 2, 3]), 99)));
// Expected: [1,2,3]
