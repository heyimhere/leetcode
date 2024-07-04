const list1 = {
	value: 2,
	next: {
		value: 4,
		next: {
			value: 3,
			next: null
		}
	}
}

const list2 = {
	value: 5,
	next: {
		value: 6,
		next: {
			value: 4,
			next: null
		}
	}
}

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function addTwoNumbers(l1, l2) {
	let list = new ListNode(0);
	let head = list;
	let sum = 0;
	let carry = 0;

	while(l1 !== null || l2 !== null || sum > 0) {
		if(l1 !== null) {
			sum = sum + l1.value;
			l1 = l1.next;
		}

		if(l2 !== null) {
			sum = sum + l2.value;
			l2 = l2.next;
		}

		if(sum >= 10) {
			carry = 1;
			sum = sum - 10;
		}

		head.next = new ListNode(sum);
		head = head.next;

		sum = carry;
		carry = 0;
	}

	return list.next;
};

console.log('adding two lists', addTwoNumbers(list1, list2));
