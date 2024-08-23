const tk = ["2", "1", "+", "3", "*"];
// const evalRPN = function(tokens) {
// 	let stack = [];
// 	let ops = {
// 		"+": (a, b) => a + b,
// 		"-": (a, b) => a - b,
// 		"*": (a, b) => a * b,
// 		"/": (a, b) => Math.trunc(a / b),
// 	};
//
// 	for(let t of tokens) {
// 		if(ops[t]) {
// 			let top = stack.pop();
// 			let second  = stack.pop();
// 			stack.push(ops[t](second, top));
// 		} else {
// 			stack.push(Number(t));
// 		}
// 	}
// 	return stack.pop();
// };

// const evalRPN = (tokens) => {
// 	let stack = [];
// 	let ops = {
// 		"+": (a, b) => a + b,
// 		"-": (a, b) => a - b,
// 		"*": (a, b) => a * b,
// 		"/": (a, b) => Math.trunc(a / b),
// 	}
//
// 	for(let t of tokens) {
// 		if(ops[t]) {
// 			let top = stack.pop();
// 			let second = stack.pop();
// 			stack.push(ops[t](second, top));
// 		} else {
// 			stack.push(Number(t));
// 		}
// 	}
// 	return stack.pop();
// }

const evalRPN = (tokens) => {
	let stack = [];
	let ops = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => Math.trunc(a / b),
	}

	for(let t of tokens) {
		if(ops[t]) {
			let top = stack.pop();
			let second = stack.pop();
			stack.push(ops[t](second, top));
		} else {
			stack.push(Number(t));
		}
	}
	return stack.pop();
}

const evalRPN = (tokens) => {
	let stack = [];
	let ops = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => Math.trunc(a / b)
	}

	for(let t of tokens) {
		if(ops[t]) {
			let top = stack.pop();
			let second = stack.pop();
			stack.push(ops[t](second, top));
		} else {
			stack.push(Number(t));
		}
	}
	return stack.pop();
}

// coding interview sample

console.log('eval reverse', evalRPN(tk));
