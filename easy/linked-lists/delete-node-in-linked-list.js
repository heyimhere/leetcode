// TODO: implement
// LC #237 — Delete Node in a Linked List
//
// Given ONLY the node to delete (NOT the head), remove it from a singly
// linked list. The node to delete is GUARANTEED not to be the tail.
//
// Example:
//   List: 4 → 5 → 1 → 9
//   Given the node with val 5:
//   → Result: 4 → 1 → 9
//
// Approach (copy-then-skip):
//   Since we can't access the previous node, we can't change its `next`
//   pointer to bypass the current one. Instead:
//     1. Copy node.next.val into node.val (we "become" the next node).
//     2. Skip the next node: node.next = node.next.next.
//
// Why this works:
//   From the outside, the list looks like the target node was removed —
//   even though we actually deleted node.next. This trick only works
//   because we're guaranteed not to be the tail (otherwise there's no
//   node.next to copy from).
//
// Time:  O(1)
// Space: O(1)
//
// Edge Cases:
//   - Given node is the tail        → problem guarantees this won't happen
//   - Two-node list, delete first   → still works: copy 2nd into 1st, drop
//                                     the 2nd

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
 * @param {ListNode} node
 * @returns {void}  (mutates in place)
 */
const deleteNode = (node) => {
  // your code here
};

console.log('=== LC #237 Delete Node in a Linked List ===\n');

console.log('Test 1 — delete 5 from [4,5,1,9]:');
const head1 = buildList([4, 5, 1, 9]);
// Find the node with val 5
let n = head1;
while (n && n.val !== 5) n = n.next;
deleteNode(n);
console.log(listToArray(head1));
// Expected: [4, 1, 9]

console.log('\nTest 2 — delete 1 from [4,5,1,9]:');
const head2 = buildList([4, 5, 1, 9]);
let m = head2;
while (m && m.val !== 1) m = m.next;
deleteNode(m);
console.log(listToArray(head2));
// Expected: [4, 5, 9]
