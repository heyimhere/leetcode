// TODO: implement
// LC #143 — Reorder List
//
// Given the head of a singly linked list L: L0 → L1 → ... → Ln-1 → Ln,
// reorder it to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
// You MUST do this in place without altering the node values.
//
// Example:
//   1 → 2 → 3 → 4         → 1 → 4 → 2 → 3
//   1 → 2 → 3 → 4 → 5     → 1 → 5 → 2 → 4 → 3
//
// Approach (three-step recipe):
//   1. Find the middle (slow/fast). For even length, take the EARLIER mid
//      so the first half is no longer than the second.
//   2. Reverse the second half in place.
//   3. Merge the two halves by alternating: a, b, a.next, b.next, ...
//      Be careful to terminate the merged list with a null tail.
//
// Why this works:
//   The desired pattern interleaves the original first half with the
//   REVERSED second half — exactly what reverse + zip-merge produces.
//
// Time:  O(n)  (each step is O(n))
// Space: O(1)
//
// Edge Cases:
//   - Empty list             → null
//   - Single node            → unchanged
//   - Two nodes              → unchanged
//   - Odd length             → middle stays in place after merge

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
 * @returns {void}  (mutates in place)
 */
const reorderList = (head) => {
  // your code here
};

console.log('=== LC #143 Reorder List ===\n');

const a = buildList([1, 2, 3, 4]);
reorderList(a);
console.log('Test 1:', listToArray(a));
// Expected: [1,4,2,3]

const b = buildList([1, 2, 3, 4, 5]);
reorderList(b);
console.log('Test 2:', listToArray(b));
// Expected: [1,5,2,4,3]

const c = buildList([1]);
reorderList(c);
console.log('Test 3 — singleton:', listToArray(c));
// Expected: [1]

const d = buildList([1, 2]);
reorderList(d);
console.log('Test 4 — pair:', listToArray(d));
// Expected: [1,2]
