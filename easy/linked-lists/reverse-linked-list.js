class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
};

const listFromArray = (arr) => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

const printList = (head) => {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result.join(' > ');
}

const reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return printList(prev);
}

const reverseList2 = (head) => {
  if (!head || !head.next) return head;

  let newHead = reverseList2(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
}


// coding interview sample

console.log('reverse list', reverseList(listFromArray([1, 2, 3, 4, 5])));
console.log('reverse list 2', reverseList(listFromArray([1, 2, 3, 4, 5])));


