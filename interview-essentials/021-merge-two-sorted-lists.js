// LC #21 — Merge Two Sorted Lists   [Easy]   Pattern: Linked List
//
// You are given the heads of two sorted linked lists list1 and list2.
//
// Splice their nodes together into one sorted list and return its head.
// The result should reuse the existing nodes, not create copies.
//
// Example 1:
//   Input:  list1 = [1,2,4], list2 = [1,3,4]
//   Output: [1,1,2,3,4,4]
// Example 2:
//   Input:  list1 = [], list2 = []
//   Output: []
// Example 3:
//   Input:  list1 = [], list2 = [0]
//   Output: [0]
//
// Constraints:
//   The number of nodes in each list is in the range [0, 50].
//   -100 <= Node.val <= 100
//   Both list1 and list2 are sorted in non-decreasing order.

class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}

const fromArray = (arr) => {
  const dummy = new ListNode();
  let tail = dummy;
  for (const v of arr) { tail.next = new ListNode(v); tail = tail.next; }
  return dummy.next;
};

const toArray = (head) => {
  const out = [];
  for (let cur = head; cur; cur = cur.next) out.push(cur.val);
  return out;
};

const mergeTwoLists = (list1, list2) => {

};

console.log(toArray(mergeTwoLists(fromArray([1, 2, 4]), fromArray([1, 3, 4]))));
// expected: [1,1,2,3,4,4]
console.log(toArray(mergeTwoLists(fromArray([]), fromArray([]))));   // expected: []
console.log(toArray(mergeTwoLists(fromArray([]), fromArray([0]))));  // expected: [0]
