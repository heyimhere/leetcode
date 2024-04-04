const n = [1, 3, 4, 4];
const t = 8;

const twoSum = function(numbers, target) {
	let i = 0;
	let j = numbers.length - 1;
	let ans = [];
	while(i <= numbers.length - 1) {
		let sum = numbers[i] + numbers[j];
		if(sum === target) {
			ans.push(i + 1, j + 1);
			break;
		} else if(sum < target) {
			i++;
		} else {
			j--;
		}

		if(i === j) {
			i++;
			j = numbers.length - i;
		}
	}
	return ans;
};

console.log('two sum', twoSum(n, t));
