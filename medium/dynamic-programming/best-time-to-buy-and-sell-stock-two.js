// const p = [7, 1, 5, 3, 6, 4];
const p = [1, 2, 3, 4, 5];
const maxProfit = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;
	while(right < prices.length) {
		let temp = 0;
		if(prices[left] < prices[right]) {
			temp = Math.abs(prices[left] - prices[right]);
			total += temp;
		};
		right++;
		left++;
	}
	return total;
};

// coding interview sample

// practice 1
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	};
	return total;
}

// practice 2
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	};
	return total;
}

// practice 3
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 4
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 5
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 6
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 7
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 8
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 9
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;
}

// practice 10
const maxProfitTwo = function(prices) {
	let left = 0;
	let right = 1;
	let total = 0;

	while(right < prices.length) {
		if(prices[left] < prices[right]) {
			total += prices[right] - prices[left];
		}
		right++;
		left++;
	}
	return total;

}


console.log('max profits', maxProfit(p));
