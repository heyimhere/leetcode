class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);

one.next = two;
two.next = three;
three.next = one;

const hasCycle = function(head) {
	let fast = head;
	while(fast && fast.next) {
		head =  head.next;
		fast = fast.next.next;
		if(head === fast) return true;
	}
	return false;
};

console.log('has cycle', hasCycle(one));
