// TODO: implement
// LC #23 — Merge k Sorted Lists
//
// Given an array of k sorted linked lists, merge them into ONE sorted list.
//
// Example:
//   [[1,4,5],[1,3,4],[2,6]]   → [1,1,2,3,4,4,5,6]
//   []                         → []
//   [[]]                       → []
//
// Approach 1 (min-heap of head nodes — O(N log k)):
//   1. Push the head of every non-empty list into a min-heap keyed by .val.
//   2. Pop the smallest. Append to result. Push its .next if non-null.
//   3. Repeat until heap empty.
//
// Approach 2 (divide & conquer — O(N log k), same asymptotics):
//   Repeatedly merge pairs of lists (each merge is the standard 2-list
//   merge). After log k passes, only one list remains.
//
// Approach 3 (sequential merge — O(Nk), inefficient for large k):
//   Merge list 0 with list 1, then with list 2, etc. Each merge re-walks
//   the growing result. Mention only to contrast with the better options.
//
// Why O(N log k):
//   The heap holds at most k items. Each of the N total nodes does one
//   heap op (push + pop), each O(log k). Same total work for D&C.
//
// Time:  O(N log k)   N = total nodes across all lists
// Space: O(k)         heap (output not counted)
//
// Edge Cases:
//   - All lists empty                → null
//   - One non-empty list             → return it
//   - lists is null/empty input      → null
//   - Multiple lists of length 1     → all merged correctly via heap

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
 * @param {Array<ListNode | null>} lists
 * @returns {ListNode | null}
 */
const mergeKLists = (lists) => {
  // your code here
};

console.log('=== LC #23 Merge k Sorted Lists ===\n');

console.log('Test 1:');
console.log(listToArray(mergeKLists([
  buildList([1, 4, 5]),
  buildList([1, 3, 4]),
  buildList([2, 6]),
])));
// Expected: [1,1,2,3,4,4,5,6]

console.log('\nTest 2 — empty input:');
console.log(listToArray(mergeKLists([])));
// Expected: []

console.log('\nTest 3 — all empty lists:');
console.log(listToArray(mergeKLists([null, null])));
// Expected: []
