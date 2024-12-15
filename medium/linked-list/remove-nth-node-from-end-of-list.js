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
const nth = 2;
const removeNthFromEnd = (head, n) => {
	let dummy = new linkedList();
	dummy.append(0);
	dummy.append(1);
	dummy.append(2);
	dummy.append(3);
	dummy.append(4);
	dummy.append(5);
	let left = dummy.head;
	let right = dummy.head;

	for(let i = 0; i < n; i++) {
		right = right.next;
	}
	//
	while(right.next) {
		right = right.next;
		left = left.next;
	}
	left.next = left.next.next;

	return JSON.stringify(dummy.head.next, null, 2);
};

console.log('remove nth node from end', removeNthFromEnd(h.head, nth));
