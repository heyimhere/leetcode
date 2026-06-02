// TODO: implement
// LC #86 — Partition List
//
// Given the head of a linked list and a value x, partition the list so that
// all nodes LESS THAN x come before nodes GREATER THAN OR EQUAL TO x. The
// ORIGINAL RELATIVE ORDER of nodes within each partition must be preserved.
//
// Example:
//   1 → 4 → 3 → 2 → 5 → 2,  x = 3   → 1 → 2 → 2 → 4 → 3 → 5
//   2 → 1,                  x = 2   → 1 → 2
//
// Approach (two scratch lists + concatenate):
//   Maintain two dummy heads, `lessHead` and `geHead`, and their tail
//   pointers `lessTail` and `geTail`.
//   Walk the original list:
//     if node.val < x → lessTail.next = node; lessTail = node
//     else            → geTail.next = node;   geTail = node
//   At the end:
//     geTail.next = null            // terminate the appended geq half
//     lessTail.next = geHead.next   // stitch
//   Return lessHead.next.
//
// Why two heads:
//   Avoids special-casing the first node added to each half.
//
// Why terminate geTail.next:
//   The last node we appended to the "geq" list still has its original
//   .next from the input — could point back into the less-than half. Must
//   null-terminate.
//
// Time:  O(n)
// Space: O(1) (rewires nodes; no new allocations beyond two dummies)
//
// Edge Cases:
//   - Empty list                   → null
//   - All values < x               → less list, geq empty
//   - All values >= x              → geq list, less empty
//   - x not present                → still partitions correctly
//   - Duplicates of x              → go to the GEQ half (per "≥ x" rule)

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
 * @param {number} x
 * @returns {ListNode | null}
 */
const partition = (head, x) => {
  // your code here
};

console.log('=== LC #86 Partition List ===\n');

console.log('Test 1:');
console.log(listToArray(partition(buildList([1, 4, 3, 2, 5, 2]), 3)));
// Expected: [1,2,2,4,3,5]

console.log('\nTest 2:');
console.log(listToArray(partition(buildList([2, 1]), 2)));
// Expected: [1,2]

console.log('\nTest 3 — all <:');
console.log(listToArray(partition(buildList([1, 2, 3]), 10)));
// Expected: [1,2,3]

console.log('\nTest 4 — all >=:');
console.log(listToArray(partition(buildList([5, 6, 7]), 1)));
// Expected: [5,6,7]
