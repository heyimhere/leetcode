// LC #19 — Remove Nth Node From End of List   [Medium]   Pattern: Linked List
//
// Given the head of a linked list, remove the nth node counting from the END
// of the list and return the head of the modified list.
//
// Example 1:
//   Input:  head = [1,2,3,4,5], n = 2
//   Output: [1,2,3,5]
// Example 2:
//   Input:  head = [1], n = 1
//   Output: []
// Example 3:
//   Input:  head = [1,2], n = 1
//   Output: [1]
// Example 4:
//   Input:  head = [1,2], n = 2
//   Output: [2]
//
// Constraints:
//   The number of nodes is sz, with 1 <= sz <= 30.
//   0 <= Node.val <= 100
//   1 <= n <= sz
//
// Follow-up: can you do it in one pass?

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

const removeNthFromEnd = (head, n) => {

};

console.log(toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2))); // expected: [1,2,3,5]
console.log(toArray(removeNthFromEnd(fromArray([1]), 1)));              // expected: []
console.log(toArray(removeNthFromEnd(fromArray([1, 2]), 1)));           // expected: [1]
console.log(toArray(removeNthFromEnd(fromArray([1, 2]), 2)));           // expected: [2]
