// LC #2 — Add Two Numbers   [Medium]   Pattern: Linked List
//
// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in REVERSE order — the ones digit comes
// first — and each node holds a single digit.
//
// Add the two numbers and return the sum as a linked list in the same
// reversed format. Neither input has leading zeros, except the number 0
// itself.
//
// Example 1:
//   Input:  l1 = [2,4,3], l2 = [5,6,4]     (342 + 465)
//   Output: [7,0,8]                         (807)
// Example 2:
//   Input:  l1 = [0], l2 = [0]
//   Output: [0]
// Example 3:
//   Input:  l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//   Output: [8,9,9,9,0,0,0,1]
//
// Constraints:
//   The number of nodes in each list is in the range [1, 100].
//   0 <= Node.val <= 9

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

const addTwoNumbers = (l1, l2) => {

};

console.log(toArray(addTwoNumbers(fromArray([2, 4, 3]), fromArray([5, 6, 4]))));
// expected: [7,0,8]
console.log(toArray(addTwoNumbers(fromArray([0]), fromArray([0]))));
// expected: [0]
console.log(toArray(addTwoNumbers(fromArray([9, 9, 9, 9, 9, 9, 9]), fromArray([9, 9, 9, 9]))));
// expected: [8,9,9,9,0,0,0,1]
