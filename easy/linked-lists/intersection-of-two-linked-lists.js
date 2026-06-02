// TODO: implement
// LC #160 — Intersection of Two Linked Lists
//
// Given the heads of two singly linked lists headA and headB, return the
// node at which the two lists INTERSECT. If they don't intersect, return
// null. (Intersection means they share the same node by reference, not by
// value, from some point on.)
//
// Example:
//   A: a1 → a2 \
//                → c1 → c2 → c3
//   B: b1 → b2 → b3 /
//   → returns c1
//
// Approach (two-pointer length sync):
//   Use pointers a = headA, b = headB.
//   Each step: a = a.next, b = b.next.
//   When a hits null, redirect a to headB.
//   When b hits null, redirect b to headA.
//   They will meet at the intersection node (or both reach null together if
//   no intersection).
//
// Why this works:
//   After swapping, each pointer has traversed (lenA + lenB) nodes total.
//   They land in lockstep on the first shared node — or simultaneously on
//   null if there's no overlap. No length-counting required.
//
// Alternative: walk each, compute lengths, advance the longer head by the
// diff, then walk in step until they meet. Two passes but explicit.
//
// Time:  O(m + n)
// Space: O(1)
//
// Edge Cases:
//   - One list empty                → null
//   - No intersection               → null
//   - Lists are identical           → headA itself
//   - Intersection at the very end  → the last node

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode | null} headA
 * @param {ListNode | null} headB
 * @returns {ListNode | null}
 */
const getIntersectionNode = (headA, headB) => {
  // your code here
};

console.log('=== LC #160 Intersection of Two Linked Lists ===\n');

// Build a shared tail: c1 -> c2 -> c3
const c1 = new ListNode(8);
const c2 = new ListNode(4); c1.next = c2;
const c3 = new ListNode(5); c2.next = c3;

// A: 4 -> 1 -> (c1)
const a1 = new ListNode(4);
const a2 = new ListNode(1); a1.next = a2;
a2.next = c1;

// B: 5 -> 6 -> 1 -> (c1)
const b1 = new ListNode(5);
const b2 = new ListNode(6); b1.next = b2;
const b3 = new ListNode(1); b2.next = b3;
b3.next = c1;

console.log('Test 1 — intersect at c1 (val 8):');
console.log(getIntersectionNode(a1, b1)?.val);
// Expected: 8

console.log('\nTest 2 — no intersection:');
const x1 = new ListNode(2);
const x2 = new ListNode(6); x1.next = x2;
const y1 = new ListNode(1);
const y2 = new ListNode(5); y1.next = y2;
console.log(getIntersectionNode(x1, y1));
// Expected: null

console.log('\nTest 3 — one empty:');
console.log(getIntersectionNode(null, b1));
// Expected: null
