
const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null
        }
      }
    }
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    return this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if(lastNode) {
      while(lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(3);
node1.next = node2;

let exampleList = new LinkedList(node1);
console.log('exampleList', exampleList);
console.log('count', exampleList.size());
console.log('lastNode', exampleList.getLast());
console.log('getFirst', exampleList.getFirst());
console.log('clear', exampleList.clear());
