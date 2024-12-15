class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head ? new listNode(head) : head;
  }

  append(data) {
    const newNode = new listNode(data);

    if(!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    
    current.next = newNode;
  }
}

let lnkList = new linkedList();
lnkList.append(1);
lnkList.append(2);
lnkList.append(3);
lnkList.append(4);
lnkList.append(5);

const h = lnkList;
const kth = 2;

const reverseKGroup = (head, k) => {
  let dummy = new linkedList();
  dummy.append(0);
  dummy.append(1);
  dummy.append(2);
  dummy.append(3);
  dummy.append(4);
  dummy.append(5);

  let groupPrev = dummy.head;

  const reverse = (start, end) => {
    let prev = null;
    let current = start;
    let next = null;

    while(current !== end) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  };
  
  while(true) {
    let kthNode = groupPrev;
    for(let i = 0; i < k && kthNode !== null; i++) {
      kthNode = kthNode.next;
    }

    if(kthNode === null) break;

    let groupStart = groupPrev.next;
    let groupEnd = kthNode.next;

    reverse(groupStart, groupEnd);

    groupPrev.next = kthNode;
    groupStart.next = groupEnd;

    groupPrev = groupStart;
  }

  return JSON.stringify(dummy.head.next, null, 2);
};

console.log('reverse k group', reverseKGroup(h.head, kth));
