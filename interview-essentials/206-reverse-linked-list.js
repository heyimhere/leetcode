// LC #206 — Reverse Linked List   [Easy]   Pattern: Linked List
//
// Given the head of a singly linked list, reverse it and return the head of
// the reversed list.
//
// Example 1:
//   Input:  head = [1,2,3,4,5]
//   Output: [5,4,3,2,1]
// Example 2:
//   Input:  head = [1,2]
//   Output: [2,1]
// Example 3:
//   Input:  head = []
//   Output: []
//
// Constraints:
//   The number of nodes is in the range [0, 5000].
//   -5000 <= Node.val <= 5000

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

const reverseList = (head) => {

};

console.log(toArray(reverseList(fromArray([1, 2, 3, 4, 5])))); // expected: [5,4,3,2,1]
console.log(toArray(reverseList(fromArray([1, 2]))));           // expected: [2,1]
console.log(toArray(reverseList(fromArray([]))));               // expected: []
