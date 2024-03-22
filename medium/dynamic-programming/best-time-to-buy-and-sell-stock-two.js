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

console.log('max profits', maxProfit(p));
