class ListNode {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let list = new LinkedList(node1);

// const reverseList = function(node) {
// 	let head = node.head;
// 	backtrack(head);
// 	function backtrack(head) {
// 		let next = head.next;
// 		next && backtrack(next);
// 		console.log('head', head);
// 		console.log('node.head', node.head);
// 	}
// 	return head;
// };

// const reverseList = function(node) {
// 	if(node === null || node.next === null) return node;
// 	let res =  reverseList(node.next);
// 	node.next.next = node;
// 	node.next = null;
// 	return res;
// }

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node; 
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

const reverseList = function(node) {
	if(node === null || node.next === null) return node;
	let res = reverseList(node.next);
	node.next.next = node;
	node.next = null;
	return res;
}

// coding interview sample

console.log('reverse list', reverseList(list.head));
