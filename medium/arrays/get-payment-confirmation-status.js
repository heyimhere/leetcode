const timeSt = [1000, 2000, 3000];
const payMent = [["Alice", "Bob"], ["Alice", "Bob"], ["Bob", "Carol"]];
const limit = 1500;

function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;
			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// coding interview sample

// practice 1
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;
			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 2
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;
			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 3
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;
			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 4
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, reciever] = payments[i];
		let currentTime = timestamps[i];
		let key = `${sender},${reciever}`;

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;
			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 5
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let currentTime = timestamps[i];
		let key = `${sender},${receiver}`;

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let lastTimeDiff = currentTime - lastTime;

			if(lastTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 6
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;
			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 7
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;

			if(paymentTimeDiff < timelimit) {
				result.push("true");
			} else {
				result.push("false");
			}
		} else {
			result.push("false");
		}
		lastTransaction.set(key, currentTime);
	}
	return result;
}

// practice 8
function getPaymentConfirmationStatus(timestamps, payments, timelimit) {
	const lastTransaction = new Map();
	const result = [];

	for(let i = 0; i < payments.length; i++) {
		let [sender, receiver] = payments[i];
		let key = `${sender},${receiver}`;
		let currentTime = timestamps[i];

		if(lastTransaction.has(key)) {
			let lastTime = lastTransaction.get(key);
			let paymentTimeDiff = currentTime - lastTime;

			if(paymentDiff)
		}
	}
}

console.log('payment confirmation', getPaymentConfirmationStatus(timeSt, payMent, limit));
