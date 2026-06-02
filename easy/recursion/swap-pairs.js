// TODO: implement
// LC #24 — Swap Nodes in Pairs  (recursive variant)
//
// Given the head of a linked list, swap every two ADJACENT nodes and
// return the new head. You may NOT modify node values — only the .next
// pointers.
//
// Example:
//   1 → 2 → 3 → 4         → 2 → 1 → 4 → 3
//   1 → 2 → 3              → 2 → 1 → 3   (odd tail stays)
//   1                       → 1
//   (empty)                 → (empty)
//
// Approach 1 (recursive — short and elegant):
//   swapPairs(head):
//     if head is null or head.next is null → return head
//     newHead = head.next
//     head.next = swapPairs(newHead.next)
//     newHead.next = head
//     return newHead
//
//   Recurse on the rest of the list (after the pair), then stitch the pair
//   together with the result.
//
// Approach 2 (iterative with dummy node):
//   dummy.next = head; prev = dummy
//   while prev.next and prev.next.next:
//     a = prev.next; b = a.next
//     a.next = b.next; b.next = a; prev.next = b
//     prev = a
//   return dummy.next
//
// Why we can't just swap values:
//   The problem explicitly forbids it (interview-realistic constraint —
//   in general, nodes might carry non-comparable data like pointers).
//
// Time:  O(n)
// Space: O(n) recursive (call stack); O(1) iterative
//
// Edge Cases:
//   - Empty list         → null
//   - Single node        → unchanged
//   - Odd count          → last node stays in place

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
 * @returns {ListNode | null}
 */
const swapPairs = (head) => {
  // your code here
};

console.log('=== LC #24 Swap Nodes in Pairs ===\n');

console.log('Test 1 — [1,2,3,4]:');
console.log(listToArray(swapPairs(buildList([1, 2, 3, 4]))));
// Expected: [2,1,4,3]

console.log('\nTest 2 — odd [1,2,3]:');
console.log(listToArray(swapPairs(buildList([1, 2, 3]))));
// Expected: [2,1,3]

console.log('\nTest 3 — singleton:');
console.log(listToArray(swapPairs(buildList([1]))));
// Expected: [1]

console.log('\nTest 4 — empty:');
console.log(listToArray(swapPairs(null)));
// Expected: []
