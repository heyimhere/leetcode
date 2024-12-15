
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
lnkList.append(1);
lnkList.append(2);


const h = lnkList.head;
const deleteDuplicates = (head) => {
	let current = head;
	while(head && head.next) {
		if(head.data === head.next.data) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
	}
	return JSON.stringify(current, null, 2);
};

const deleteDuplicatesCopy = (head) => {
	let current = head;
	let seen = new Map();
	while(head && head.next) {
		seen.set(head.data, head.data);
		console.log('seen', seen);
		if(seen.has(head.next.data)) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
	}
	return JSON.stringify(current, null, 2);
}

console.log('delete duplicates', deleteDuplicatesCopy(h));
