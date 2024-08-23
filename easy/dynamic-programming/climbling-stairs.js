const number = 88;
const climbingStairs = function(n, memo) {
	memo = memo || {};
	if(memo[n]) return memo[n];

	if(n <= 1) return 1;

	return memo[n] = climbingStairs(n - 1, memo) + climbingStairs(n - 2, memo);
};

// coding interview sample

console.log('climbing stairs', climbingStairs(number));
