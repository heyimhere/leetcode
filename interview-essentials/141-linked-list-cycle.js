// LC #141 — Linked List Cycle   [Easy]   Pattern: Linked List
//
// Given the head of a linked list, return true if the list contains a cycle.
//
// A cycle exists when some node can be reached again by continuously
// following next pointers.
//
// Example 1:
//   Input:  head = [3,2,0,-4], tail connects to index 1
//   Output: true
// Example 2:
//   Input:  head = [1,2], tail connects to index 0
//   Output: true
// Example 3:
//   Input:  head = [1], no cycle
//   Output: false
//
// Constraints:
//   The number of nodes is in the range [0, 10^4].
//   -10^5 <= Node.val <= 10^5
//
// Follow-up: can you solve it using constant extra space?

class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}

// Builds a list from arr; if pos >= 0, links the tail back to index pos.
const buildCyclicList = (arr, pos = -1) => {
  if (arr.length === 0) return null;
  const nodes = arr.map((v) => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  if (pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
  return nodes[0];
};

const hasCycle = (head) => {

};

console.log(hasCycle(buildCyclicList([3, 2, 0, -4], 1))); // expected: true
console.log(hasCycle(buildCyclicList([1, 2], 0)));         // expected: true
console.log(hasCycle(buildCyclicList([1], -1)));           // expected: false
console.log(hasCycle(buildCyclicList([], -1)));            // expected: false
