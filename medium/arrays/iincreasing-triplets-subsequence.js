const n = [1, 2, 3, 4, 5];

// greedy algo
const increasingTriplet = function(nums) {
	let firstNum = Infinity;
	let secondNum = Infinity;

	for(let currentNum of nums) {
		if(currentNum > secondNum) {
			return true;
		}

		if(currentNum > firstNum) {
			secondNum = currentNum;
		} else {
			firstNum = currentNum;
		}
	}

	return false;
};

console.log('increasing triplet', increasingTriplet(n));
