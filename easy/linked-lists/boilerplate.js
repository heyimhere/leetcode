export function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

export function fromArray(arr) {
  if (!arr || arr.length === 0) return null;
  const dummy = new ListNode(0);
  let tail = dummy;
  for (const v of arr) {
    tail.next = new ListNode(v);
    tail = tail.next;
  }
  return dummy.next;
}

export function toArray(head) {
  const out = [];
  let curr = head;
  while (curr) {
    out.push(curr.val);
    curr = curr.next;
  }
  return out;
}

export function printList(head) {
  console.log(toArray(head).join(" -> "));
}
